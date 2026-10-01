import { useState } from "react";
import { useMenuContext } from "../../contexts/MobileMenuContext";
import Close from "../Icons/Close";
import { navigationLinks } from "../../utils/content";
import { motion } from "motion/react";

export default function MobileMenu() {
  const { menuOpened } = useMenuContext();
  const [activeLink, setActiveLink] = useState<number>(-1);

  return (
    <motion.div
      animate={menuOpened ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          display: "none",
        },
        visible: {
          opacity: 1,
          display: "flex",
        },
      }}
      className="fixed top-0 right-0 bottom-0 left-0 hidden bg-white/30"
    >
      <motion.nav
        animate={menuOpened ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            x: "100%",
          },
          visible: {
            opacity: 1,
            x: "0%",
          },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex h-full w-full flex-col bg-white"
      >
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <a href="/" className="flex items-center gap-x-1.25">
            <img src="/PrimalTrainingLogo.svg" alt="Primal Training Logo" />
            <span className="font-logo font-bold -tracking-5 text-[1.25rem]">
              PrimalTraining
            </span>
          </a>
          <Close />
        </div>

        <ul className="flex flex-col justify-center w-full">
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className={`${link.id === 1 || link.id === 2 ? "border-b py-5 pl-5":""} style-link`}
              onClick={() =>
                setActiveLink(activeLink === link.id ? -1 : link.id)
              }
            >
              {link.name === "Reserve Your Spot" ? (
                <div className=" flex justify-center w-full">
                  <a
                    href={link.href}
                    className="bg-primary py-5 pl-5 w-full"
                  >
                    {link.name}
                  </a>
                </div>
              ) : (
                <a href={link.href} className="my-5">
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
}
