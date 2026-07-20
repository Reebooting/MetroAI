import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="card border-0 shadow-lg rounded-4 p-5"
      style={{
        background: "#ffffff",
      }}
    >
      {children}
    </div>
  );
}