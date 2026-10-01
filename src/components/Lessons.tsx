import { lessons } from "../utils/content";

export default function Lessons() {
  return (
    <section className="w-full mx-auto bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`${lesson.id === 2 ? "border-s border-e" : ""} border-b md:border-b-none flex flex-col pt-7.5 ps-7.5 pe-7.5 pb-7.5`}
          >
            {/* altezza una riga: 2.81rem × 0.91 = 2.5571rem => 2righe: 2.5571rem × 2 = 5.1142rem  */}
            <h2 className="style-h2 min-h-[5.11rem] mb-20">{lesson.title}</h2>
            <div className="flex flex-col flex-1">
              <p
                className={`${lesson.hours ? "border-b" : "invisible"} style-p1 pb-2`}
              >
                {lesson.hours || "\u00A0"}
              </p>
              <p
                className={`${lesson.hours ? "pt-6.25" : ""} style-p1 pb-2 border-b pt-6.25`}
              >
                {lesson.hours2}
              </p>
              <p className="style-p1 pt-6.25 pb-16.5">{lesson.description}</p>
              <a
                href="/reserve-your-spot"
                type="button"
                className="text-center style-link bg-primary py-3 w-full whitespace-nowrap rounded-[0.45rem] mt-auto"
              >
                {lesson.button}
              </a>
            </div>
          </div>
            
        ))}
      </div>
    </section>
  );
}
