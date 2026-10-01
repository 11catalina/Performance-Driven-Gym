import { useMenuContext } from "../../contexts/MobileMenuContext";

export default function Hamburger() {
  const { setMenuOpened } = useMenuContext();
  return (
    <button
      className="hidden cursor-pointer flex-col justify-center gap-y-1.75 max-lg:flex me-5"
      onClick={() => setMenuOpened(true)}
    >
       <div className="absolute h-0.5 w-6 bg-black" />
        <div className="absolute h-0.5 w-6 rotate-90 bg-black" />
    </button>
  );
}