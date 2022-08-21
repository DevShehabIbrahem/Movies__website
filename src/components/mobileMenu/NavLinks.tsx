import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import Select from "../../common/Select";
import { isActiveStyle, isNotActiveStyle } from "../../common/styles";
import { words } from "../../common/words";
import { useAppDispatch } from "../../Redux/hook";
import { MenuChange } from "../../Redux/Reducers/CloseMenu";
const NavLinks = () => {
  const dispatch = useAppDispatch();
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={() => dispatch(MenuChange(false))}
        >
          Home
        </NavLink>
      </li>
      {words.navlinkMobile.map((n) => (
        <li key={n} onClick={() => dispatch(MenuChange(false))}>
          <NavLink
            to={`${n}`}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            {n}
          </NavLink>
        </li>
      ))}
      <Select />
    </ul>
  );
};

export default NavLinks;
