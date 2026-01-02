import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'neon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#D4FF4F] text-[#030304] hover:bg-[#e5ff8f] hover:shadow-[0_12px_32px_rgba(212,255,79,0.35)]',
  secondary: 'bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-[#D4FF4F]/50 hover:text-[#D4FF4F]',
  ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
  neon: 'bg-[#D4FF4F]/10 text-[#D4FF4F] border border-[#D4FF4F]/30 hover:bg-[#D4FF4F]/20 hover:border-[#D4FF4F]/50',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4FF4F]/50 focus:ring-offset-2 focus:ring-offset-[#030304] disabled:opacity-50 disabled:cursor-not-allowed';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !isLoading && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span className="transform group-hover:translate-x-1 transition-transform">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={`group ${combinedClassName}`}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={`group ${combinedClassName}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
