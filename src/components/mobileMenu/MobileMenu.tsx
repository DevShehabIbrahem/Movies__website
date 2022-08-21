import NavLinks from "./NavLinks";
import "./MobileMenu.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import NavLink from "./NavLinks";

const MobileMenu = ({
  setMenu,
}: {
  setMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="mobilemenu animate-slide-in">
      <AiOutlineClose
        className="mobilemenu__close cursor-pointer"
        onClick={() => setMenu(false)}
      />
      <NavLinks setMenu={setMenu} />
    </div>
  );
};

export default MobileMenu;
