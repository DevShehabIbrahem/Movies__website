const isActiveStyle: string =
  "items-center my-2 font-extrabold text-red-800 transition-all duration-200 ease-in-out capitalize";

const isNotActiveStyle: string =
  "items-center my-2 text-white hover:text-red-800 transition-all duration-200 ease-in-out capitalize";

const BlackStyle: string =
  "bg-black p-[76px] text-[#757575] text-[13px] border-t-8 border-gray-700";

const isNotBlack: string = "pt-[76px] text-[#757575] text-[13px]";

const navChanged: string =
  "bg-black fixed w-full top-0 transition-all ease-in flex justify-between items-center px-5 py-1 z-20 ";
const navNoChange: string =
  "bg-transparent fixed w-full top-0 pb-5 transition-all ease-in flex justify-between items-center px-5 py-1 z-20 ";

export {
  navChanged,
  navNoChange,
  isNotBlack,
  BlackStyle,
  isNotActiveStyle,
  isActiveStyle,
};
