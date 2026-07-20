import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "w-full rounded-3 px-4 py-3 fw-semibold border-0 transition";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    secondary:
      "bg-secondary text-white hover:opacity-90",

    danger:
      "bg-danger text-white hover:opacity-90",
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}