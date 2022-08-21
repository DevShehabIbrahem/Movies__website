import NavLinks from "./NavLinks";
import "./MobileMenu.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import Select from "../../common/Select";
import { MenuChange } from "../../Redux/Reducers/CloseMenu";
import { useAppDispatch } from "../../Redux/hook";

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mobilemenu animate-slide-in">
      <AiOutlineClose
        className="mobilemenu__close cursor-pointer"
        onClick={() => dispatch(MenuChange(false))}
      />
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
