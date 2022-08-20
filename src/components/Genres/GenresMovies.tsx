import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { selectStatus } from "../../Redux/Reducers/Genres";
import { useTypedSelector } from "../../Redux/store";

type Props = {};

const GenresMovies = (props: Props) => {
  const state = useTypedSelector(selectStatus);
  console.log(state);

  let grid: string =
    "grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-center justify-items-center ";
  const prefixs = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div className={grid}>
        {state?.map((m: any) => (
          <Link
            to={`/movie/${m.id}`}
            key={m.id}
            className="opacity-[0.8] hover:opacity-[1] duration-300 transition-all"
          >
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
    </div>
  );
};

export default GenresMovies;
