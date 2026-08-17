type SectionLabelProps = {
  number: string;
  label: string;
};

function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="mx-auto mb-6 max-w-2xl text-center">
      <span className="block text-xs font-medium tracking-[0.25em] text-stone-400">
        {number}
      </span>
      <div className="mx-auto my-3 h-px w-8 bg-stone-300" />
      <span className="block text-xs font-medium tracking-[0.25em] text-stone-400">
        {label}
      </span>
    </div>
  );
}

export default SectionLabel;
