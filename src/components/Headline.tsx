interface HeroHeadline {
  children: React.ReactNode;
  align: "center" | "start";
  className?: string;
}

export default function Headline({children, align, className=""}: HeroHeadline) {
  return (
    <section className="w-full mx-auto border-b py-5 bg-white">
      <div className={`flex items-center justify-${align} ${className}`}>{children}</div>
    </section>
  );
}
