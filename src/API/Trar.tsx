// import React,{Component} from "react";
// import { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import user from "../../assets/userProfile.png";

// import MobileMenu from "../mobileMenu/MobileMenu";
// import { AiOutlineMenu } from "react-icons/ai";
// import { words } from "../../common/words";
// import { IoIosNotifications } from "react-icons/io";

// import {
//   isActiveStyle,
//   isNotActiveStyle,
//   navChanged,
//   navNoChange,
// } from "../../common/styles";
// import { closeM, MenuChange } from "../../Redux/Reducers/CloseMenu";
// import { useTypedSelector } from "../../Redux/store";
// import { useAppDispatch } from "../../Redux/hook";
// import { render } from "@testing-library/react";

// class Navbar extends  Component {
//   const dispatch = useAppDispatch();
//   const state = useTypedSelector(closeM);
//   const [navChange, setNavChange] = useState<boolean>(false);

//   const NavbarChange = () => {
//     if (window.scrollY >= 300) {
//       setNavChange(true);
//     } else {
//       setNavChange(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", NavbarChange);
//     return () => window.removeEventListener("scroll", NavbarChange);
//   }, []);
// render() {
//   return (
//     <div className={`${navChange ? navChanged : navNoChange}`}>
//       <div className="flex items-center justify-between gap-20">
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-[60px] mr-4" />
//         </Link>

//     <div className="hidden md:flex items-center text-white space-x-4 font-semibold">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? isActiveStyle : isNotActiveStyle
//         }
//         onClick={() => dispatch(MenuChange(false))}
//       >
//         Home
//       </NavLink>
//       {words.navlink.map((n) => (
//         <NavLink
//           to={`${n}`}
//           className={({ isActive }) =>
//             isActive ? isActiveStyle : isNotActiveStyle
//           }
//           key={n}
//         >
//           {n}
//         </NavLink>
//       ))}
//     </div>
//   </div>

//   <div className="hidden md:flex items-center justify-center space-x-2 relative">
//     <IoIosNotifications className="text-white text-[20] md:text-[30px]" />
//     <img src={user} alt="user" className="w-12 h-12" />
//   </div>
//   {/* Mobile-Menu */}
//   <span
//     className="flex text-[2rem] cursor-pointer text-white md:hidden"
//     onClick={() => dispatch(MenuChange(true))}
//   >
//     <AiOutlineMenu />
//   </span>
//   {state && <MobileMenu />}
// </div>
<>ss</>;
//   );
// }

// };

// export default Navbar;
