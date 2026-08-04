import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
