import React from 'react';
import { type ButtonProps } from "@/interfaces";
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';


function cn(...classes: (string | undefined)[]) {
  return twMerge(clsx(...classes));
}

export default function Button({children, className, size = "medium", shape, variant, ...props}: ButtonProps) {

  return (
    <button
      className={cn(buttonVariants({ size, shape, variant }), className)} {...props}>
      {children}
    </button>
  )
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary:
        "border-2 border-black text-black bg-emerald-500 hover:bg-neutral-200",
      secondary: "border-2 border-white text-white bg-black hover:bg-blue-800",
      danger:
        "border-none border-red-500 text-white bg-red-600 hover:bg-red-600",
    },
    size: {
      small: "text-sm px-1 py-0",
      medium: "text-base px-2 py-1",
      large: "text-lg px-4 py-2",
    },
    shape: {
      default: "rounded-md",
      pill: "rounded-full",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
