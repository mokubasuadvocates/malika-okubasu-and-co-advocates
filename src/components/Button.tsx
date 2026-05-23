"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "text" | "primary" | "gold" | "inverseOutline";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "solid",
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-8 py-3.5 font-sans-primary font-semibold shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-divider disabled:text-brand-grey disabled:hover:translate-y-0";

  const variants = {
    solid: "bg-navy text-white hover:bg-gold hover:text-white",
    outline:
      "border-2 border-navy bg-white text-navy hover:border-gold hover:bg-navy hover:text-white",
    text: "text-navy shadow-none hover:text-gold-text hover:underline underline-offset-4",
    primary: "bg-navy text-white hover:bg-gold hover:text-white",
    gold: "bg-gold text-white hover:bg-gold-hover hover:text-white",
    inverseOutline:
      "border-2 border-white bg-transparent text-white hover:border-gold hover:bg-white hover:text-navy",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
