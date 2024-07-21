import { Menu, X } from "lucide-react";

type MenuButtonProperties = {
  IsMenuOpen: boolean;
  handleToggleMenu: () => void;
};

export default function MenuButton({
  IsMenuOpen,
  handleToggleMenu,
}: MenuButtonProperties) {
  return (
    <button onClick={handleToggleMenu}>{IsMenuOpen ? <X /> : <Menu />}</button>
  );
}
