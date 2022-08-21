import { useState, FC, ChangeEvent, useEffect, MouseEventHandler } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/userProfile.png";
import MobileMenu from "../mobileMenu/MobileMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { words } from "../../common/words";
import { IoIosNotifications } from "react-icons/io";
import {
  isActiveStyle,
  isNotActiveStyle,
  navChanged,
  navNoChange,
} from "../../common/styles";

const Navbar = () => {
  const [navChange, setNavChange] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const NavbarChange = () => {
    if (window.scrollY >= 300) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarChange);
    return () => window.removeEventListener("scroll", NavbarChange);
  }, []);

  return (
    <div className={`${navChange ? navChanged : navNoChange}`}>
      <div className="flex items-center justify-between gap-20">
        <Link to="/Home">
          <img src={logo} alt="logo" className="w-[60px] mr-4" />
        </Link>

        <div className="hidden md:flex items-center text-white space-x-4 font-semibold">
          {words.navlink.map((n) => (
            <NavLink
              to={`${n}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              key={n}
            >
              {n}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-2 relative">
        <IoIosNotifications className="text-white text-[20] md:text-[30px]" />
        <img src={user} alt="user" className="w-12 h-12" />
      </div>
      {/* Mobile-Menu */}
      <span
        className="flex text-[2rem] cursor-pointer text-white md:hidden"
        onClick={() => setMenu(true)}
      >
        <AiOutlineMenu />
      </span>
      {menu && <MobileMenu setMenu={setMenu} />}
    </div>
  );
};

export default Navbar;
