import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Request from "../../API/Requests ";
import RowSidebar from "../../common/RowSidebar";
import { fetchGenres } from "../../common/utitly";
import { useAppDispatch } from "../../Redux/hook";
import { Fetchgenres, selectStatus } from "../../Redux/Reducers/Genres";
import { SearchMovies } from "../../Redux/Reducers/SearchSlice";

const Sidebar = () => {
  const [genres, setGenres] = useState<[]>([]);
  const [term, setTerm] = useState<string>("");

  const dispatch = useAppDispatch();
  const Navigate = useNavigate();
  const [genresnum, setGenresnum] = useState<any>();

  const handleSearch = () => {
    dispatch(SearchMovies(term));
    if (term) Navigate("/search");
  };

  const handelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenresnum(e.target.value);
    Navigate(`/Genres/${genresnum}`);
  };

  useEffect(() => {
    fetchGenres(setGenres);
    dispatch(Fetchgenres(genresnum));
  }, [genresnum]);

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
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className="w-60 py-1 outline-0 bg-transparent border-0 focus:outline-none  text-black"
              placeholder="Search"
            />
          </div>

          <select
            onChange={handelChange}
            className="w-60 rounded-md drop-shadow-md bg-gray-300 
            hover:bg-gray-200  outline text-black p-2 text-[1rem]"
          >
            {genres.map((item: any) => (
              <option value={item.id} key={item.id} className="font-bold">
                {item.name}
              </option>
            ))}
          </select>

          <div className="flex flex-col">
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
