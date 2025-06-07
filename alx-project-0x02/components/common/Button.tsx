import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
    children: ReactNode;
    className?: string;
    size?: "small" | "medium" | "large";
}

function cn(...classes: (string | undefined)[]) {
  return twMerge(clsx(...classes));
}

export default function Button({children, className, size = "medium", ...props}: ButtonProps) {

  return (
    <button
      className={cn(buttonVariants({ size }), className)} {...props}>
      {children}
    </button>
  )
}

const buttonVariants = cva("rounded-md", {
    variants: {
        variant: {
            primary:"border-2 border-black text-black bg-emerald-500 hover:bg-neutral-200",
            secondary:"border-2 border-white text-white bg-black hover:bg-blue-800",
            danger:"border-none border-red-500 text-red-500 bg-red-600 hover:bg-red-600",
        },
        size:{
            small: "text-sm px-1 py-0",
            medium: "text-base px-2 py-1",
            large: "text-lg px-4 py-2",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
});
