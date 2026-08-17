# Executive Summary  
Before writing any code, set up a consistent project structure with all necessary configs, scripts, and documentation. This includes root files (`package.json`, `index.html`, config files, etc.), a `src/` folder with entry points (`main.tsx`, `App.tsx`) and organized components/pages, plus assets (`images`, `icons`, `fonts`) and static data (`projects`, `services`, `navigation`). Crucial dev tools include Vite (`vite.config.ts`), TypeScript (`tsconfig.json`), Tailwind (`tailwind.config.js` + `postcss.config.js`), ESLint (`.eslintrc`), Prettier (`.prettierrc`), and build/test scripts in `package.json`. Also prepare CI/CD workflows (e.g. GitHub Actions), a `.gitignore`, VSCode settings, and docs (`README.md`, `CONTRIBUTING.md`, `DESIGN-SPEC.md`, accessibility/QA checklists). Optional extras (Storybook, i18n, analytics) can be added later. Below is a prioritized file/folder checklist with brief purposes, code snippets for key files, and a table of mandatory vs optional items.

## Project Root Files  
- **`index.html`** (HTML) – Entry point. In Vite, `index.html` lives at the project root (not in `public/`). It contains the `<div id="root"></div>` where React mounts.  
- **`package.json`** (JSON) – Project manifest. Lists dependencies, scripts, and metadata. Include standard scripts: `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"` (example below). Include lint/format scripts too.  
  ```json
  {
    "name": "stonebridge-site",
    "version": "1.0.0",
    "scripts": {
      "dev": "vite",                    
      "build": "vite build",
      "preview": "vite preview",
      "lint": "eslint . --ext .ts,.tsx",
      "format": "prettier --write ."
    },
    "dependencies": {
      "react": "^18.x",                  
      "react-dom": "^18.x"
    },
    "devDependencies": {
      "vite": "^4.x",                  
      "typescript": "^5.x",
      "tailwindcss": "^3.x",
      "postcss": "^8.x",
      "autoprefixer": "^10.x",
      "@vitejs/plugin-react": "^4.x",
      "@tailwindcss/vite": "^1.x",
      "eslint": "^8.x",
      "prettier": "^2.x"
    }
  }
  ```  
- **`tsconfig.json`** (JSON) – TypeScript configuration for the app. Standard settings (e.g. `"jsx": "react-jsx"`). Often extend from `create-vite` defaults.  
- **`.gitignore`** – Ignore build artifacts and OS files. At minimum:  
  ```
  /node_modules
  /dist
  .env.local
  .DS_Store
  .idea/
  .vscode/
  ```  
- **`.vscode/`** (folder) – Editor settings. (optional but recommended) For example, `.vscode/settings.json` might enable `formatOnSave` and use `"eslint"` as the formatter. `.vscode/extensions.json` can recommend ESLint/Prettier extensions.  

## Configuration Files  
- **`vite.config.ts`** (TS) – Vite configuration. Include React and Tailwind CSS plugins, e.g.:  
  ```ts
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  export default defineConfig({
    plugins: [react(), tailwindcss()],
    // (optional: define path aliases, etc.)
  });
  ```  
  This ensures Vite processes React and Tailwind correctly.  
- **`tailwind.config.js`** (JS) – Tailwind config at project root. Specify `content` paths (e.g. `./index.html`, `./src/**/*.{ts,tsx}`) so Tailwind purges unused styles. Extend theme with project tokens if needed. Example snippet:  
  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
      extend: {
        colors: {
          navy: '#0B1726',
          copper: '#A56A3A'
        },
        fontFamily: {
          sans: ['General Sans', 'sans-serif'],
          mono: ['IBM Plex Mono', 'monospace']
        }
      }
    },
    plugins: []
  };
  ```  
  (Tailwind will read this file by default.)  
- **`postcss.config.js`** (JS) – Enables Tailwind as a PostCSS plugin (used by Vite). Example:  
  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  };
  ```  
- **`.eslintrc.json`** (JSON) – ESLint rules for React + TS. A common setup extends React/TypeScript recommended configs, e.g.:  
  ```json
  {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "settings": { "react": { "version": "detect" } },
    "rules": { /* project-specific rules */ }
  }
  ```  
- **`.prettierrc`** (JSON) – Prettier formatting rules, e.g.:  
  ```json
  {
    "singleQuote": true,
    "semi": true,
    "trailingComma": "es5"
  }
  ```  
- **`.env` / `.env.example`** – Environment variables. If no backend, at least have an `.env.example` template (e.g. `VITE_API_URL=...`) and ignore the real `.env`. Use `VITE_` prefix for Vite.  

## Source Folder (`src/`)  
- **`src/main.tsx`** (TSX) – App entrypoint. Renders React into the DOM. Example:  
  ```tsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { BrowserRouter } from 'react-router-dom';
  import App from './App';
  import './styles/globals.css'; // Tailwind base styles

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  ```  
- **`src/App.tsx`** (TSX) – Top-level component. Sets up routes/layout. Example using React Router:  
  ```tsx
  import { Routes, Route } from 'react-router-dom';
  import Header from './components/layout/Header';
  import Footer from './components/layout/Footer';
  import Home from './pages/Home';
  // import About, Services, Projects, Contact pages similarly

  function App() {
    return (
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
  export default App;
  ```  
- **`src/pages/`** – Page components. For each page, a TSX file, e.g. `Home.tsx`, `About.tsx`, `Services.tsx`, `Projects.tsx`, `Contact.tsx`. Each exports a React component for that page. Use **PascalCase** for components (e.g. `Home.tsx`), as recommended. Example `Home.tsx`:  
  ```tsx
  import React from 'react';
  function Home() {
    return (
      <section className="hero">
        <h1>Stonebridge Construction</h1>
        {/* hero content */}
      </section>
    );
  }
  export default Home;
  ```  
- **`src/components/`** – Reusable UI components. Divide into subfolders by role:  
  - **`layout/`**: Layout components (e.g. `Header.tsx`, `Footer.tsx`). These often contain navigation, logos, etc. Example `Header.tsx`:  
    ```tsx
    import React from 'react';
    import { NavLink } from 'react-router-dom';
    function Header() {
      return (
        <header className="bg-navy-950 text-white">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-semibold">STONEBRIDGE</h1>
            <nav>
              <NavLink to="/">Home</NavLink>
              {/* other links */}
              <NavLink to="/contact" className="bg-copper-600 px-4 py-2 rounded">Consultation</NavLink>
            </nav>
          </div>
        </header>
      );
    }
    export default Header;
    ```  
  - **`ui/`**: Generic UI pieces (Buttons, Card, etc.). For example, `Button.tsx` or `StatBlock.tsx`. Use consistent file naming: e.g. `Button.tsx`, `useAuth.ts` (camelCase for hooks).  
  - **`sections/`**: If following the design spec, you might break pages into sections (e.g. `Hero.tsx`, `ProjectGallery.tsx`). These are optional but help organize large page JSX.  

- **`src/styles/`** – Global CSS and tokens.  
  - **`globals.css`** (CSS) – Import Tailwind and any global resets. Usually contains:  
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    /* Custom global classes or @layer rules can go here */
    ```  
  - **`design-tokens.json`** (JSON) – (Optional) Central design tokens (colors, spacing, etc.) to sync design values across code. Example snippet:  
    ```json
    {
      "colors": {
        "navy-950": "#0B1726",
        "copper-600": "#A56A3A",
        "stone-50": "#F7F6F3",
        "slate-700": "#39434D"
      },
      "spacing": {
        "1": "4px",
        "2": "8px",
        "3": "16px",
        "4": "24px"
      }
    }
    ```  

- **Naming Conventions:** Use **PascalCase** for React components and pages (`Home.tsx`, `Header.tsx`) and **camelCase** for non-component modules (`useAuth.ts`, `formatDate.ts`). Use plural folder names (e.g. `components`, `hooks`, `services`).

## Assets & Static Data  
- **`/public/`** – Static assets served as-is. Contains:  
  - `favicon.ico`, `robots.txt`, etc.  
  - (Optionally) an `index.html` if not using root index (but Vite uses root `index.html`).  
- **`/src/assets/images/`** – Illustrative and UI images (JPG, PNG) used in the site (e.g. hero, project images).  
- **`/src/assets/icons/`** – SVG or icon files (if not using an icon library).  
- **`/src/assets/fonts/`** – (If needed) custom font files. Otherwise, use CDN or system fonts.  
- **`/src/data/`** – Static data files (TS or JSON). E.g.:  
  - `projects.ts` – array of project objects for the gallery.  
  - `services.ts` – service descriptions.  
  - `navigation.ts` – site nav links.  
  Example:
  ```ts
  // src/data/navigation.ts
  export const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    // ...
  ];
  ```  

## Scripts & Tooling  
- **`package.json` Scripts:** See example above. Add lint/format/test scripts as needed.  
- **Testing:** If using a test framework (e.g. Vitest or Jest), include config files (e.g. `vitest.config.ts`) and test script (`"test": "vitest"`). (Optional, low priority for a simple static site.)  
- **Pre-commit Hooks:** (Optional) Install Husky to lint/format on commit.  
- **CI/CD (GitHub Actions):**  
  - `.github/workflows/ci.yml` – Run build and lint on push. Example tasks: `npm install`, `npm run lint`, `npm run build`. Priority Medium.  
  - `.github/workflows/deploy.yml` – (Optional) Deploy site (e.g. to GitHub Pages or Vercel).  

## Documentation & Checklist  
- **`README.md`** (MD) – High priority. Project overview and setup instructions.  
- **`CONTRIBUTING.md`** – Medium. Guidelines for contributors.  
- **`DESIGN-SPEC.md`** – Medium. Summarize design system (colors, typography).  
- **`ACCESSIBILITY.md` / `QA.md`** – Medium. Checklists for accessibility and testing (e.g. “ARIA roles, color contrast”, “no console errors, responsive check”).  
- **`.editorconfig`** – Medium. Consistent editor styles (indent, EOL).  
- **`.eslintignore`, `.prettierignore`** – (Optional) Paths to ignore by linters/formatters.  

## Optional Extras (Lower Priority)  
- **Storybook:** A `.storybook/` folder with `main.js`, `preview.js` to document UI components. Useful for UI dev, but not required.  
- **i18n:** Folder `src/i18n/` with translation files and config (e.g. react-i18next). Only if planning multiple languages.  
- **Analytics:** E.g. `src/utils/analytics.ts` to initialize Google Analytics or similar. Environment keys in `.env`.  

## Code Snippets for Key Files  

- **package.json (scripts section)**: Basic scripts as per Vite.  
  ```json
  {
    "scripts": {
      "dev": "vite",           
      "build": "vite build",
      "preview": "vite preview",
      "lint": "eslint . --ext .ts,.tsx",
      "format": "prettier --write ."
    }
  }
  ```  
- **tailwind.config.js**: Example with content paths and custom colors.  
  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
    theme: {
      extend: {
        colors: {
          navy: '#0B1726',
          copper: '#A56A3A'
        }
      }
    },
    plugins: []
  };
  ```  
- **src/main.tsx**: React entrypoint mounting `<App />`.  
  ```tsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import './styles/globals.css';

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode><App /></React.StrictMode>
  );
  ```  
- **src/App.tsx**: Top-level component with routing.  
  ```tsx
  import { Routes, Route } from 'react-router-dom';
  import Header from './components/layout/Header';
  import Footer from './components/layout/Footer';
  import Home from './pages/Home';
  // ... other page imports

  function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ... other routes */}
        </Routes>
        <Footer />
      </>
    );
  }
  export default App;
  ```  
- **src/pages/Home.tsx**: Example page component.  
  ```tsx
  import React from 'react';
  function Home() {
    return (
      <section className="container mx-auto p-8">
        <h1 className="text-4xl font-bold">Welcome to Stonebridge Construction</h1>
        <p className="mt-4">Building trust through precision and experience.</p>
      </section>
    );
  }
  export default Home;
  ```  
- **src/components/layout/Header.tsx**: Site header with nav links.  
  ```tsx
  import React from 'react';
  import { NavLink } from 'react-router-dom';

  function Header() {
    return (
      <header className="bg-navy-950 text-white">
        <div className="container mx-auto flex justify-between p-4">
          <h1 className="text-xl font-semibold">STONEBRIDGE</h1>
          <nav className="flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* ... */}
            <NavLink to="/contact" className="bg-copper-600 px-3 py-1 rounded">Consultation</NavLink>
          </nav>
        </div>
      </header>
    );
  }
  export default Header;
  ```  
- **src/styles/globals.css**: Tailwind directives.  
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Custom global styles, e.g. scroll padding for sections */
  html { scroll-padding-top: 4rem; }
  ```  
- **design-tokens.json**: (Optional) Shared design constants.  
  ```json
  {
    "colors": {
      "navy-950": "#0B1726",
      "copper-600": "#A56A3A",
      "stone-50": "#F7F6F3",
      "slate-700": "#39434D"
    },
    "spacing": {
      "1": "4px",
      "2": "8px",
      "3": "16px",
      "4": "24px"
    }
  }
  ```  

## Mandatory vs Optional Files (Priority)  

| File/Folder                | Purpose                                                | Required?   | Priority  |
|----------------------------|--------------------------------------------------------|------------:|:---------:|
| `package.json`             | Dependency list and scripts (Vite, build, lint). | **Yes**   | High      |
| `vite.config.ts`           | Vite config (React, Tailwind plugins).   | **Yes**   | High      |
| `tsconfig.json`            | TypeScript settings (JSX, paths, strict mode).         | **Yes**   | High      |
| `tailwind.config.js`       | Tailwind setup (content paths, theme).                 | **Yes**   | High      |
| `postcss.config.js`        | PostCSS plugins (tailwindcss, autoprefixer).          | **Yes**   | High      |
| `index.html`               | Root HTML (entry point for Vite).        | **Yes**   | High      |
| `src/main.tsx`             | React entrypoint (mount `<App />`).                   | **Yes**   | High      |
| `src/App.tsx`              | Top-level component (routing, layout).                 | **Yes**   | High      |
| `src/pages/`               | Page components (Home.tsx, About.tsx, etc.).          | **Yes**   | High      |
| `src/components/layout/`   | Layout components (Header.tsx, Footer.tsx).           | **Yes**   | High      |
| `src/styles/globals.css`   | Tailwind base imports (`@tailwind base; ...`).        | **Yes**   | High      |
| `.gitignore`               | Ignore build/output, `node_modules/`, `.env` files.    | **Yes**   | High      |
| `README.md`                | Project overview and setup instructions.               | **Yes**   | High      |
| `.eslintrc.json`           | Lint rules for React/TypeScript.                       | **No**    | Medium    |
| `.prettierrc`              | Code formatter rules.                                  | **No**    | Medium    |
| `.editorconfig`            | Editor consistency rules (indentation, EOL).           | **No**    | Medium    |
| `/public/`                 | Static assets (favicon, etc.).                         | **No**    | Medium    |
| `/src/assets/`             | Images, icons, fonts directories.                      | **No**    | Medium    |
| `/src/data/`               | Static data (projects, services, nav).                 | **No**    | Medium    |
| `CONTRIBUTING.md`          | Contribution guidelines.                               | **No**    | Medium    |
| `ACCESSIBILITY.md`         | Accessibility checklist.                               | **No**    | Medium    |
| `.vscode/settings.json`    | Editor settings (format on save, etc.).                | **No**    | Medium    |
| `.vscode/extensions.json`  | Recommended VSCode extensions.                         | **No**    | Medium    |
| `.github/workflows/ci.yml` | CI pipeline (install, lint, build).                    | **No**    | Medium    |
| `design-tokens.json`       | Shared design constants (colors, spacing).             | **No**    | Medium    |
| `storybook/`               | Storybook config (for UI component development).       | Optional  | Low       |
| `src/i18n/`                | Internationalization files and config.                 | Optional  | Low       |
| `analytics.js`             | Analytics init (e.g. Google Analytics).                | Optional  | Low       |

**Notes:** No backend is assumed, so backend-related configs are omitted. All `.env` files should be gitignored; include an `.env.example` if needed. Only include extensions or languages your team uses (e.g. `.jsx` if any JSX, though we use `.tsx` for TSX).

## Gitignore & VSCode Snippets  
- **Recommended `.gitignore` entries:**  
  ```
  node_modules/
  dist/
  .env*
  .DS_Store
  .idea/
  .vscode/
  ```  
- **VSCode recommended settings (in `.vscode/settings.json`):**  
  ```json
  {
    "editor.formatOnSave": true,
    "eslint.validate": ["javascript", "typescript", "typescriptreact"],
    "files.insertFinalNewline": true
  }
  ```  
- **VSCode recommended extensions (in `.vscode/extensions.json`):**  
  ```json
  {
    "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "bradlc.vscode-tailwindcss"]
  }
  ```  

## Initial Commit & Setup Checklist  
- [ ] Initialize Git repository.  
- [ ] Create the above folder/file structure.  
- [ ] Add and commit `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `.eslintrc.json`, `.prettierrc`, `.gitignore`, `README.md`.  
- [ ] Scaffold React entry (`src/main.tsx`, `src/App.tsx`, pages, components).  
- [ ] Add `globals.css` and design tokens as needed.  
- [ ] Install NPM dependencies (`react`, `tailwindcss`, etc.) and run `npm run dev` to verify setup.  
- [ ] Configure any CI (create `.github/workflows`) and ensure linting passes on initial commit.  
- [ ] Document project setup in `README.md`.  

By following this checklist, you ensure a consistent, maintainable starter project aligned with Vite, React, and Tailwind best practices.