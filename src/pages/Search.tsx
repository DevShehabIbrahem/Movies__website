import { ChangeEvent, useEffect, useState } from "react";

import { useTypedSelector } from "../Redux/store";

import { useAppDispatch } from "../Redux/hook";
import { SearchMovies, SearchState } from "../Redux/Reducers/SearchSlice";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

let grid: string =
  "grid  grid-cols-1 px-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-center justify-items-center ";

const Search = () => {
  const prefixs = "https://image.tmdb.org/t/p/original";

  const [term, setTerm] = useState<string>("");

  const state = useTypedSelector(SearchState);
  const dispatch = useAppDispatch();

  const handlesearch = () => {
    dispatch(SearchMovies(term));
  };

  const hnadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setTerm(value);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 ">
        <span className="cursor-pointer" onClick={handlesearch}>
          <IoIosSearch className="text-red-500 text-[20] md:text-[30px]" />
        </span>
        <input
          type="text"
          className="rounded-md p-1 border-red-500 border-2"
          onChange={hnadleChange}
        />
      </div>
      {/* result */}
      <div className={grid}>
        {state.results?.map((m: any) => (
          <Link to={`/movie/${m.id}`} key={m.id}>
            <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
              <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px]">
                {m?.vote_average}
                <AiFillStar />
              </span>

              <img
                src={`${prefixs}${m?.poster_path}`}
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
