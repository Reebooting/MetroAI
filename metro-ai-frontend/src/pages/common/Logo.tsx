import { TrainFront } from "lucide-react";

interface LogoProps {
  size?: "small" | "large";
}

export default function Logo({ size = "large" }: LogoProps) {
  const iconSize = size === "large" ? 42 : 30;
  const titleSize = size === "large" ? "2.6rem" : "1.5rem";
  const subtitleSize = size === "large" ? "1rem" : ".8rem";

  return (
    <div className="d-flex align-items-center gap-3">

      <div className="metro-logo">

        <TrainFront size={iconSize} color="white" />

      </div>

      <div>

        <h1
          className="m-0 fw-bold"
          style={{
            fontSize: titleSize,
            color: "var(--metro-primary)"
          }}
        >
          MetroAI
        </h1>

        <p
          className="m-0"
          style={{
            fontSize: subtitleSize,
            color: "var(--metro-text-light)"
          }}
        >
          Smart Metro Management
        </p>

      </div>

    </div>
  );
}