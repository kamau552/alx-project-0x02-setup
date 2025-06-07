import { ButtonHTMLAttributes, ReactNode } from "react";
export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  shape?: "default" | "pill" | "square";
  variant?: "primary" | "secondary" | "danger";
}