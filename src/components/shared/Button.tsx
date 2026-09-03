import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: "border border-white bg-stone-900 text-white hover:bg-stone-800",

  secondary:
    "border border-stone-900 bg-white text-stone-900 hover:bg-stone-50",
};

function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-sm
        px-6
        py-3
        text-sm
        font-medium
        tracking-wide
        transition-all
        hover:scale-105
        active:scale-95
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-stone-900
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${className}
        `}
    >
      {children}
    </button>
  );
}

export default Button;
