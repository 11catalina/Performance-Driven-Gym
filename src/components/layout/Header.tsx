import type { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}
export default function Header({ children }: HeaderProps) {
  return <header className="w-full mx-auto">{children}</header>;
}
