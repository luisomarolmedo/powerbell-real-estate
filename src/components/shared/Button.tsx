import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-stone-900 text-white hover:bg-stone-800",

  secondary:
    "border border-stone-300 bg-white text-stone-900 hover:bg-stone-50",
};

function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-sm
        px-5
        py-2.5
        text-sm
        font-medium
        tracking-wide
        transition-colors
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-stone-900
        ${variants[variant]}
        ${className}
        `}
    >
      {children}
    </button>
  );
}

export default Button;
