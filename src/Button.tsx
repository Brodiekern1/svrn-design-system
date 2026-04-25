"use client";
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center font-semibold uppercase tracking-[0.22em] transition-colors rounded-lg disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#D85050]/40 focus:ring-offset-2 focus:ring-offset-[#1F1F1F]";

const sizes: Record<ButtonSize, string> = {
  sm: "px-[14px] py-2 text-[11px]",
  md: "px-[22px] py-3 text-xs",
  lg: "px-8 py-4 text-xs",
};

const variants: Record<ButtonVariant, string> = {
  // Canonical SVRN button — mirrors the brand-onepager .btn recipe
  // (deep maroon fill + bright maroon outline + cream text + hover toward bright)
  primary: "bg-[#671F1F] text-[#ECE5CB] border border-[#D85050] hover:bg-[#7A2828]",
  secondary: "bg-[#353535] text-white/85 hover:bg-[#454545] hover:text-white",
  ghost: "bg-transparent text-white border border-[#3A3A3A] hover:border-white/25",
  danger: "bg-transparent text-[#C44040] border border-[#C44040]/35 hover:bg-[#C44040]/10",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
