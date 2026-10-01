import { useMenuContext } from "../../contexts/MobileMenuContext";

export default function Close() {
  const { setMenuOpened } = useMenuContext();
  return (
    <div className="w-full">
      <button
        className="relative ml-auto flex size-6 cursor-pointer items-center"
        onClick={() => setMenuOpened(false)}
      >
        <div className="absolute h-0.5 w-6  bg-black" />
      </button>
    </div>
  );
}
