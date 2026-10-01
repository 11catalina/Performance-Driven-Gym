import { useState, type ReactNode } from "react";
import { MenuContext } from "./MobileMenuContext";

interface Props {
  children: ReactNode;
}

export default function MenuContextProvider({ children }: Props) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}
