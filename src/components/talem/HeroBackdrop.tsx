import Grainient from "../reactbits/Grainient";
import DotGrid from "../reactbits/DotGrid";

type HeroBackdropProps = {
  className?: string;
};

const SAND_TO_BLUE = ["#fdfcfa", "#f6f3ee", "#ece7df", "#c9cfe0", "#9fb6ef"];

// Shared hero background: a grainy sand gradient (React Bits Grainient) with
// the React Bits Dot Grid on top, which reacts to the pointer.
export default function HeroBackdrop({ className = "" }: HeroBackdropProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <Grainient
        colors={SAND_TO_BLUE}
        angle={128}
        bands={1}
        speed={0.55}
        flow={0.7}
        softness={1}
        silk={0.4}
        grainAmount={0.07}
        grainSize={1.1}
        interactive={false}
        clickSwirl={false}
      />
      <DotGrid
        className="!absolute inset-0"
        dotSize={3}
        gap={22}
        baseColor="#c9c1b3"
        activeColor="#2f6bff"
        proximity={150}
        shockRadius={260}
        shockStrength={4}
        swell={1}
        glow={0.4}
        fade={0.35}
        opacity={0.75}
      />
    </div>
  );
}
