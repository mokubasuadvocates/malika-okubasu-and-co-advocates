"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "text" | "primary";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "solid",
  onClick,
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm px-8 py-3.5 font-sans-primary font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-divider disabled:text-brand-grey";

  const variants = {
    solid: "bg-button-blue text-white shadow-sm hover:bg-button-blue-hover",
    outline:
      "border-2 border-navy-950 bg-white text-heading hover:bg-light-blue hover:border-brand-blue hover:text-link-hover",
    text: "text-link hover:text-link-hover hover:underline underline-offset-4",
    primary: "bg-button-blue text-white shadow-sm hover:bg-button-blue-hover",
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
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
