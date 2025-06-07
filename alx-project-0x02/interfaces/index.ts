import { ButtonHTMLAttributes, ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
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