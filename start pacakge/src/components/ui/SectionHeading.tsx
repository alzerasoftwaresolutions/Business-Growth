interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`mb-16 max-w-3xl ${alignment}`}>
      <p className="label-caps mb-4">{label}</p>
      <h2 className="font-sans text-3xl font-semibold leading-tight tracking-[-0.01em] text-navy-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-relaxed text-slate-700">{description}</p>
      ) : null}
    </div>
  );
}