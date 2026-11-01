import type { ReactNode } from "react";
import "./appointment-button.css";

type AppointmentButtonProps = {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light" | "outline";
  size?: "default" | "sm";
  className?: string;
};

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function AppointmentButton({
  href,
  children,
  tone = "dark",
  size = "default",
  className = "",
}: AppointmentButtonProps) {
  const classes = [
    "button appointment-cta",
    `appointment-cta--${tone}`,
    size === "sm" ? "appointment-cta--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      <span className="appointment-cta-label">{children}</span>
      <span className="appointment-cta-icon" aria-hidden="true">
        <ArrowUpRight />
        <ArrowUpRight />
      </span>
    </a>
  );
}
