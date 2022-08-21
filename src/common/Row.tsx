import { useEffect } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import { Link } from "react-router-dom";

import { useTypedSelector } from "../Redux/store";

import { useAppDispatch } from "../Redux/hook";
import { selectStatus } from "../Redux/Reducers/Genres";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";

import { Navigation } from "swiper";

const Row = ({
  Reguest,
  sidebar,
  title,
  girdRow,
}: {
  Reguest: string;
  title: string;
  poster?: boolean;
  girdRow?: boolean;
  sidebar?: boolean;
}) => {
  const prefixs = "https://image.tmdb.org/t/p/original";
  const { movies } = useFetchMovies(Reguest);

  let flex: string = "flex  m-auto  items-center px-6";
  let grid: string =
    "grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  justify-center justify-items-center ";

  return (
    <>
      <h1 className="text-[2rem] ml-8 mb-2 mt-9 font-Roboto">{title}</h1>

      <div className={!girdRow ? flex : grid}>
        {!girdRow ? (
          <>
            <Swiper
              navigation={true}
              slidesPerView={4}
              spaceBetween={10}
              modules={[Navigation]}
              className="p-5"
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                650: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {movies.map((m: any) => (
                <SwiperSlide>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <>
            {movies.map((m: any) => (
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
          </>
        )}
      </div>
    </>
  );
};

export default Row;
