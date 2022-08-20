import { useState, FC, ChangeEvent, useEffect, MouseEventHandler } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/userProfile.png";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import {
  isActiveStyle,
  isNotActiveStyle,
  navChanged,
  navNoChange,
} from "../../common/styles";
import axios from "axios";
import { useAppDispatch } from "../../Redux/hook";
import { useTypedSelector } from "../../Redux/store";
import { Fetchgenres, selectStatus } from "../../Redux/Reducers/Genres";

const Navbar = () => {
  const [navChange, setNavChange] = useState(false);

  const dispatch = useAppDispatch();
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
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
        <Link to="/">
          <img src={logo} alt="logo" className="w-[60px] mr-4" />
        </Link>

        <div className="hidden  md:flex items-center text-white space-x-4 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Home
          </NavLink>

          <NavLink
            to="Tvmovies"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Tv Shows
          </NavLink>

          <NavLink
            to="moviselist"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="search"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 relative">
        <IoIosNotifications className="text-white text-[20] md:text-[30px]" />
        <img src={user} alt="user" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Navbar;
