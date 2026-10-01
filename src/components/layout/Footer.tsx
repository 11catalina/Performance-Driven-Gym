import { contacts, footerSocial, openingHours } from "../../utils/content";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="px-5 py-6.75">
        <div className="h-34 flex items-start flex-col gap-y-7 md:flex-row md:justify-between mb-42.25">
          <img
            src="/Logo.png"
            alt="Primal Training Logo, 2 half circles and a full circle, black"
            className="w-37.5"
          />
          <p className="style-logo text-[3.27rem]">
            PrimalTraining
          </p>
        </div>
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="flex flex-col justify-start">
            <h5 className="style-h5 mb-3.75">
              Contact
            </h5>
            <p className="style-p3">
              Email: {contacts.email}
            </p>
            <p className="style-p3">
              Phone: {contacts.phone}
            </p>
          </div>
          <div className="flex flex-col justify-start pt-10 md:pt-0">
            <h5 className="style-h5 mb-3.75">
              Opening hours
            </h5>
            {openingHours.map((hour) => (
              <ul>
                <li key={hour.id} className="flex gap-x-8 justify-between">
                  <p className="style-p3 uppercase">
                    {hour.day}
                  </p>
                  <p className="style-p3">
                    {hour.hours}
                  </p>
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col justify-start pt-10 md:pt-0">
            <h5 className="style-h5 mb-3.75 me-3.75">
              Social
            </h5>
            {footerSocial.map((link) => (
              <div className="flex flex-col">
                <a key={link.id} href={link.href} className="style-p3 underline">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}