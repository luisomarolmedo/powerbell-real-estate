type CtaButtonProps = {
  className?: string;
  onClick?: () => void;
};

function CtaButton({ className = "", onClick }: CtaButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-sm bg-stone-900 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 ${className}`}
      onClick={onClick}
    >
      Agenda una visita
    </button>
  );
}

export default CtaButton;
