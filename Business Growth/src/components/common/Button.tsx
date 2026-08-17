import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50',
  outline: 'border border-slate-300 text-slate-900 hover:bg-slate-50',
  ghost: 'text-slate-700 hover:bg-slate-100',
  text: 'text-slate-900 underline-offset-4 hover:underline p-0',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-5 py-3',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ' +
  'disabled:opacity-60 disabled:cursor-not-allowed';

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Neutral, client-independent Button/CTA primitive (04 §17, §18).
 *
 * Renders an `<a>` when `href` is provided (navigation/CTA destination) and a
 * `<button>` for actions. Variants represent presentation levels only — never
 * industry or client identities. Loading state is announced and disables the
 * control.
 */
export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  function Button({ variant = 'primary', size = 'md', loading = false, className = '', children, ...rest }, ref) {
    const classes = [BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className].join(' ');
    const inner = loading ? (
      <>
        <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        <span>{children}</span>
      </>
    ) : (
      children
    );

    if (typeof rest.href === 'string') {
      const { href, ...anchorRest } = rest as ButtonAsLink;
      const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
      return (
        <a
          ref={ref as never}
          href={href}
          className={classes}
          aria-busy={loading || undefined}
          aria-disabled={loading || undefined}
          {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : null)}
          {...anchorRest}
        >
          {inner}
        </a>
      );
    }

    const buttonRest = rest as ButtonAsButton;
    return (
      <button ref={ref as never} className={classes} aria-busy={loading || undefined} disabled={loading || buttonRest.disabled} {...buttonRest}>
        {inner}
      </button>
    );
  }
);