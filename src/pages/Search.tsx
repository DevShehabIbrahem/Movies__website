import { useState } from "react";

import { useTypedSelector } from "../Redux/store";

import { useAppDispatch } from "../Redux/hook";
import { SearchMovies, SearchState } from "../Redux/Reducers/SearchSlice";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { grid, prefixs } from "../common/styles";
import ErrorImage from "../assets/Error.jpg";
import MyImage from "../common/shared/MyImage";
const Search = () => {
  const [term, setTerm] = useState<string>("");

  const state = useTypedSelector(SearchState);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(SearchMovies(term));
  };

  return (
    <>
      <div className="flex mx-auto  gap-2 w-80 md:w-96  duration-300 p-2 rounded-[100px] bg-gray-300 drop-shadow-md hover:bg-gray-200 ">
        <span
          className="text-red-500 text-[20] md:text-[30px] hover:cursor-pointer "
          onClick={handleSearch}
        >
          <IoIosSearch className=" text-[2rem]" />
        </span>

        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          className="py-1 w-full outline-0 bg-transparent border-0 focus:outline-none  text-black "
          placeholder="Search"
        />
      </div>
      <h1 className="text-center text-[1.5rem] py-5 font-bold">
        {`Search results ${state.results?.length || 0}`}
      </h1>

      {/* result */}
      <div className={grid}>
        {state.results?.map((m: any) => (
          <Link
            to={`/movie/${m.id}`}
            key={m.id}
            className="opacity-[0.8] hover:opacity-[1] duration-300 transition-all"
          >
            <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
              <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px] z-10">
                {m?.vote_average}
                <AiFillStar />
              </span>
              <MyImage
                src={
                  m?.poster_path ? `${prefixs}${m?.poster_path}` : ErrorImage
                }
                alt="Movie"
                className="rounded-2xl border-2 border-red-200 "
              />

              <span className="text-[1.2rem] text-center pt-2 flex items-center justify-center font-bold">
                {m?.original_title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Search;
