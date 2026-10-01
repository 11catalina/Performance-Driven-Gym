import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface contextValueShape {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<contextValueShape>({
  menuOpened: false,
  setMenuOpened: () => {},
});

export function useMenuContext() {
  return useContext(MenuContext);
}
