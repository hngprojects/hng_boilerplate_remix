import { Menu, X } from "lucide-react";

type MenuButtonProperties = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};

export default function MenuButton({
  isMenuOpen,
  handleToggleMenu,
}: MenuButtonProperties) {
  return (
    <button onClick={handleToggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
  );
}
