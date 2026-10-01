export default function AboutImg() {
  return (
    <section className="w-full m-auto relative">
      <div className="relative">
        <picture>
          <source media="(min-width:1280px)"
          srcSet="/MainAboutImg.webp" />
          <source media="(min-width:768px)"
          srcSet="/MainAboutImg_md.webp" />
          <img src="/MainAboutImg_sm.webp" alt="Image of woman working out" className="w-full object-cover"/></picture>
      </div>
      <div className="absolute mb-5 bottom-0 start-5 text-white w-83.75 md:w-135 lg:w-152.5">
        <h2 className="style-h2">We've created a space where you can reconnect with your primal self. </h2>
      </div>
    </section>
  );
}
