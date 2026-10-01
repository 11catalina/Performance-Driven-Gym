import { section } from "../utils/content";

export default function Section() {
  return (
    <section className="w-full mx-auto border-b">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {section.map((tab) => (
          <div
            key={tab.id}
            className={`bg-secondary ps-5 pt-5 pe-8 order-2 md:order-1 md:gap-y-12 lg:gap-y-60.5 flex flex-col ${tab.id > 1 ? "md:border-l" : "border-b md:border-hidden"}`}
          >
            <h2 className="style-h2">
              {tab.title}
            </h2>
            <p className="style-p2 pb-5 pt-1.5 md:pb-0">
              {tab.description}
            </p>
          </div>
        ))}

        <div className="order-1 md:order-2">
          <picture>
            <source media="(min-width: 1280px)" 
            srcSet="Hero2.webp"/>
            <source 
            media="(min-width: 768px)"
            srcSet="Hero2_md.webp"/>
            <img
              src="/Hero2_sm.webp"
              alt="Image of woman working out"
              className="w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
