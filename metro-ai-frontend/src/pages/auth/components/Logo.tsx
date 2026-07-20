import { TrainFront } from "lucide-react";

interface LogoProps {
  small?: boolean;
}

export default function Logo({ small = false }: LogoProps) {
  return (
    <div className="d-flex align-items-center gap-3">

      <div className="metro-logo">

        <TrainFront
          size={small ? 26 : 38}
          strokeWidth={2.3}
        />

      </div>

      <div>

        <h2
          className={`fw-bold mb-0 ${
            small ? "fs-4" : "display-5"
          }`}
          style={{ color: "var(--metro-primary)" }}
        >
          MetroAI
        </h2>

        <p className="metro-subtitle mb-0">

          Smart Metro Management System

        </p>

      </div>

    </div>
  );
}