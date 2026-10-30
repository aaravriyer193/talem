import type { ReactNode } from "react";
import SpecularButton from "../reactbits/SpecularButton";
import { navigateTo } from "./navigate";

type Tone = "ink" | "sand";

type SpecularLinkProps = {
  href: string;
  children: ReactNode;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  newTab?: boolean;
  className?: string;
};

const TONES: Record<Tone, { tint: string; textColor: string; lineColor: string; baseColor: string }> = {
  ink: { tint: "#0b1220", textColor: "#fdfcfa", lineColor: "#c9d7ff", baseColor: "#2a3346" },
  sand: { tint: "#fdfcfa", textColor: "#0b1220", lineColor: "#2f6bff", baseColor: "#b9ab92" },
};

const RADIUS = { sm: 19, md: 22, lg: 27 };

// The React Bits Specular Button, used for the site's primary calls to action.
export default function SpecularLink({
  href,
  children,
  tone = "ink",
  size = "md",
  newTab = false,
  className = "",
}: SpecularLinkProps) {
  const colors = TONES[tone];
  return (
    <SpecularButton
      role="link"
      size={size}
      radius={RADIUS[size]}
      tint={colors.tint}
      tintOpacity={1}
      textColor={colors.textColor}
      lineColor={colors.lineColor}
      baseColor={colors.baseColor}
      idleIntensity={0.5}
      intensity={1.1}
      thickness={1.4}
      autoAnimate
      speed={0.22}
      className={`!font-normal !tracking-[-0.005em] shadow-[0_14px_30px_-16px_rgba(11,18,32,0.55)] ${className}`}
      onClick={() => navigateTo(href, newTab)}
    >
      {children}
    </SpecularButton>
  );
}
