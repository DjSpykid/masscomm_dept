// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white',
  {
    variants: {
      variant: {
        primary: 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-300',
        secondary: 'bg-white text-blue-700 border border-transparent hover:bg-blue-50 focus-visible:ring-blue-300',
        outline: 'bg-transparent border border-gray-200 hover:bg-gray-50 focus-visible:ring-gray-300',
        ghost: 'hover:bg-gray-100 focus-visible:ring-gray-300',
        link: 'text-blue-700 underline-offset-4 hover:underline focus-visible:ring-blue-300',
      },
      size: {
        sm: 'h-9 px-3 rounded-md',
        md: 'h-10 px-4 py-2 rounded-md',
        lg: 'h-11 px-8 py-4 rounded-md text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };