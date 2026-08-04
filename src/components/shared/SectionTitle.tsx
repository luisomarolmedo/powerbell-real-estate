type SectionTitleProps = {
  title: string;
  subtitle: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-stone-600">{subtitle}</p>
    </header>
  );
}

export default SectionTitle;
