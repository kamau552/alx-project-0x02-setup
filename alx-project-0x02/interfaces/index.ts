import { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";

// Define buttonVariants for use in VariantProps
export const buttonVariants = cva("button", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    shape: {
      "rounded-sm": "rounded-sm",
      "rounded-md": "rounded-md",
      "rounded-lg": "rounded-lg",
      pill: "rounded-full",
      square: "rounded-none",
    },
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
    },
  },
});

export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
    children: ReactNode;
    className?: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "pill" | "square";
    variant?: "primary" | "secondary" | "danger";
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  button?: React.ReactNode; 
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  userId: number;
  address: number;
}