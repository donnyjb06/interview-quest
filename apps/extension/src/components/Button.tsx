import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "@meltdownjs/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "active" | "destructive";
  className?: string;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) => {
  const variantClassName = cva("action-button text-white", {
    variants: {
      variant: {
        primary: "bg-accent hover:bg-muted-accent active:bg-accent-active",
        active: "bg-success hover:bg-success-hover",
        destructive: "bg-transparent hover:bg-error/8 text-error card-border",
      },
    },
  });
  return (
    <button className={cn(variantClassName({ variant }), className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
