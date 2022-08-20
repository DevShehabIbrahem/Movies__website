import React from "react";
import { Link } from "react-router-dom";
import { selectStatus } from "../../Redux/Reducers/Genres";
import { useTypedSelector } from "../../Redux/store";

type Props = {};

const GenresMovies = (props: Props) => {
  const state = useTypedSelector(selectStatus);
  console.log(state);

  let grid: string =
    "grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center justify-center justify-items-center ";
  const prefixs = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div className={grid}>
        {state?.map((item: any) => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <img
              src={`${prefixs}${item?.poster_path}`}
              alt="Movie"
              className="w-[14rem]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresMovies;
