import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="mb-3">

      <label className="form-label fw-semibold">

        {label}

      </label>

      <input
        {...props}
        className={`form-control ${className}`}
      />

      {error && (
        <small className="text-danger">

          {error}

        </small>
      )}

    </div>
  );
}