/**
 * Skip-to-content link (navigation.accessibility.skipToContent). Rendered
 * first in the site shell so keyboard users can jump past the header/nav.
 */
export function SkipLink({ mainId = 'main-content' }: { mainId?: string }) {
  return (
    <a
      href={`#${mainId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
    >
      Skip to main content
    </a>
  );
}