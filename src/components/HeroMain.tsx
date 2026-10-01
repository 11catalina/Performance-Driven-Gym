import type { HeroContent } from "../utils/contentTypes";

export default function HeroMain({
  id,
  imageSrc_sm,
  imageSrc_md,
  imageSrc_lg,
  imageAlt,
  title,
  title2,
  bodytitle,
  body,
  linkText,
  linkHref,
  reverse,
  background,
}: HeroContent) {
  const image = (
    <picture>
      <source media="(min-width: 1280px)" srcSet={imageSrc_lg} />
      <source media="(min-width: 768px)" srcSet={imageSrc_md} />

      <img
        src={imageSrc_sm}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </picture>
  );

  const text = (
    <div key={id} className="px-5 flex flex-col gap-y-1.5 lg:gap-y-40.75">
      <div>
        <h2 className="pe-5 pt-5 style-h2">
          {title} <br className={`${id === 3 ? "block" : "hidden"} md:block`} />
          {title2}
        </h2>
      </div>
      <div className="flex flex-col gap-y-5 mb-7.5 md:mb-6.75 lg:mb-16.5">
        <div>
          <h5 className="style-h5 mb-2">{bodytitle}</h5>
          <p className="style-p2">{body}</p>
        </div>

        <div>
          <a
            href={linkHref}
            type="button"
            className="py-3 px-4.25 style-link hover:bg-primary transition-all duration-200 self-start"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <section className={`w-full mx-auto border-b ${background}`}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {reverse ? (
          <>
            <div className="order-2 md:order-1 md:col-span-2">{text}</div>
            <div className="order-1 md:order-2">{image}</div>
          </>
        ) : (
          <>
            <div className="md:col-span-2">{image}</div>
            {text}
          </>
        )}
      </div>
    </section>
  );
}
