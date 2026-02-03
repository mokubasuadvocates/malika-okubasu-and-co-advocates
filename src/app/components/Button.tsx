'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'text' | 'primary';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'solid', 
  onClick, 
  href, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 font-sans-primary transition-all";
  
  const variants = {
    solid: "bg-[#0B1E3A] text-white hover:bg-[#132B4C]",
    outline: "border-2 border-[#0B1E3A] text-[#0B1E3A] bg-white hover:bg-[#F2F4F7]",
    text: "text-[#0B1E3A] hover:underline underline-offset-4",
    primary: "bg-[#0B1E3A] text-white hover:bg-[#132B4C]"
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
