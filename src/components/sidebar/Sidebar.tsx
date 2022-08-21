import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Request from "../../API/Requests ";
import RowSidebar from "../../common/RowSidebar";
import { useAppDispatch } from "../../Redux/hook";
import { SearchMovies } from "../../Redux/Reducers/SearchSlice";
import Select from "../../common/Select";

const Sidebar = () => {
  const [term, setTerm] = useState<string>("");

  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  // Handle search
  const handleSearch = () => {
    dispatch(SearchMovies(term));
    if (term) Navigate("/search");
  };

  return (
    <div className="hidden lg:flex lg:w-[23rem] h-auto border-l-2 border-[#ccc] px-5">
      <div className="px-[1rem]">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2  duration-300 p-2 rounded-[100px] bg-gray-300 drop-shadow-md hover:bg-gray-200 ">
            <span
              onClick={handleSearch}
              className="text-red-500 text-[20] md:text-[30px] hover:cursor-pointer"
            >
              <IoIosSearch />
            </span>
            <input
              type="text"
              value={term}
              placeholder="Search"
              onChange={(e) => setTerm(e.target.value)}
              className="w-60 py-1 outline-0 bg-transparent border-0 focus:outline-none  text-black"
            />
          </div>
          {/* Select Type  */}
          <Select />
          <div className="flex flex-col mb-11">
            <RowSidebar Reguest={Request.Action} title="Trinding" />
            <RowSidebar Reguest={Request.Horror} title="popular" />
            <RowSidebar Reguest={Request.Adventure} title="Tv Shows" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
