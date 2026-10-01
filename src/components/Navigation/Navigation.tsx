import { navigationLinks } from "../../utils/content";
import Hamburger from "../Icons/Hambuerger";



export default function Navigation() {
  return (
     <nav className="bg-secondary px-5 border-b">
        <div className="flex items-center justify-between py-5">
          <a href="/" className="flex items-center gap-x-1.25">
            <img src="/PrimalTrainingLogo.svg" alt="Primal Training Logo" />
            <span className="font-logo font-bold -tracking-5 text-[1.25rem]">
              PrimalTraining
            </span>
          </a>
          <ul className="flex items-center gap-x-15 max-lg:hidden">
            {navigationLinks.map((link) => (
              <li key={link.id} className="style-link">
                {link.name === "Reserve Your Spot" ? (
                  <a href={link.href} className="bg-primary py-3 px-4.25 rounded-[0.253rem] hover:bg-black hover:text-white duration-200 transition-all">
                    {link.name}
                  </a>
                ) : (
                  <a href={link.href}>{link.name}</a>
                )}
              </li>
            ))}
          </ul>
          <Hamburger />
        </div>
      </nav>
  )
}
