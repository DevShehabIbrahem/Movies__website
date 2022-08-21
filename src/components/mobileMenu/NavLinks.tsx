import { Dispatch, SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";
import { isActiveStyle, isNotActiveStyle } from "../../common/styles";
import { words } from "../../common/words";
const NavLinks = ({
  setMenu,
}: {
  setMenu: Dispatch<SetStateAction<boolean>>;
}) => (
  <ul>
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
