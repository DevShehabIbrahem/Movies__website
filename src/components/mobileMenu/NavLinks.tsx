import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { isActiveStyle, isNotActiveStyle } from "../../common/styles";
import { words } from "../../common/words";
const NavLinks = ({
  setMenu,
}: {
  setMenu: Dispatch<SetStateAction<boolean>>;
}) => (
  <ul>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? isActiveStyle : isNotActiveStyle
        }
        onClick={() => setMenu(false)}
      >
        Home
      </NavLink>
    </li>
    {words.navlinkMobile.map((n) => (
      <li key={n} onClick={() => setMenu(false)}>
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
  </ul>
);

export default NavLinks;
