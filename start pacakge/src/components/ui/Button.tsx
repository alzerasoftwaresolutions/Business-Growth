interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline-light';
  to?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type Variant = NonNullable<ButtonProps['variant']>;

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  gold: 'btn-gold',
  'outline-light': 'btn-outline-light',
};

export default function Button({
  variant = 'primary',
  to,
  href,
  className = '',
  children,
  ...rest
}: ButtonProps & NativeButtonProps) {
  const classes = `${variantClass[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}