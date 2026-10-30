import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
};

export default function SectionHeading({ title, lead, align = "left", action }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end ${centered ? "md:justify-center" : "md:justify-between"}`}>
      <div className={`max-w-[760px] ${centered ? "mx-auto text-center" : ""}`}>
        <h2 className="t-h2 text-ink">{title}</h2>
        {lead && <p className={`t-lead mt-5 max-w-[620px] ${centered ? "mx-auto" : ""}`}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
