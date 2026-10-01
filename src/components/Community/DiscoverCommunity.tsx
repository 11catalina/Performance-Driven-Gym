import { joinTheCommunity } from "../../utils/content";

export default function CommunityCommunity() {
  return (
    <section className="mx-auto w-full bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex flex-col order-2 md:order-1">
          <div className="py-5 md:py-4.25 lg:py-8 px-5 border-b">
            <h2 className="style-h2 text-nowrap md:text-wrap">DISCOVER YOUR POTENTIAL</h2>
          </div>
          {joinTheCommunity.map((sec) => (
            <div key={sec.id} className="py-5 px-5 border-b">
              <h4 className="style-h4 mb-1.5">{sec.title}</h4>
              <p className="style-p2">{sec.description}</p>
            </div>
          ))}
          <div className="flex flex-1 items-center justify-center md:justify-start px-5 py-7.5">
            <a
              href="#"
              type="button"
              className="style-link transition-all duration-200 hover:bg-primary px-4.25 py-3"
            >
              View classes
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 lg:col-span-2">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/JoinTheCommunity.webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/JoinTheCommunity_md.webp"
            />
            <img
              src="/JoinTheCommunity_sm.webp"
              alt="Image of person squatting with a barbell"
              className="w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
