import {
    forwardRef,
    type InputHTMLAttributes
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = "", ...props }, ref) => {

        return (
            <div className="mb-3">

                <label className="form-label fw-semibold">
                    {label}
                </label>

                <input
                    ref={ref}
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
);

Input.displayName = "Input";

export default Input;