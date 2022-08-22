import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import useFetchMovies from "../../hooks/useFetchMovies";
import { AiFillStar } from "react-icons/ai";
import { Navigation } from "swiper";
import { flex, grid, prefixs } from "../styles";
import ErrorImg from "../../assets/Error.jpg";

import "swiper/css";
import "swiper/css/navigation";
import MyImage from "./MyImage";
import { useEffect, useState } from "react";
import Loading from "./Loading/Loading";

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
  const { movies } = useFetchMovies(Reguest);

  const breakpoints = {
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
  };

  return (
    <>
      <h1 className="text-[2rem] ml-8 mb-2 mt-9 font-Roboto">{title}</h1>

      <div className={!girdRow ? flex : grid}>
        {!girdRow ? (
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={10}
            modules={[Navigation]}
            className="p-5"
            breakpoints={breakpoints}
          >
            {movies.map((m: any) => (
              <SwiperSlide key={m?.id}>
                <Link
                  to={`/movie/${m.id}`}
                  className="opacity-[0.8] hover:opacity-[1] duration-300 transition-all"
                >
                  <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
                    <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px] z-10">
                      {m?.vote_average}
                      <AiFillStar />
                    </span>
                    <MyImage
                      src={
                        m?.poster_path
                          ? `${prefixs}${m?.poster_path}`
                          : ErrorImg
                      }
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
        ) : (
          <>
            {movies.map((m: any) => (
              <Link
                to={`/movie/${m.id}`}
                className="opacity-[0.8] hover:opacity-[1] duration-300 transition-all"
                key={m?.id}
              >
                <div className="relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all ">
                  <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px]">
                    {m?.vote_average}
                    <AiFillStar />
                  </span>

                  <MyImage
                    src={
                      m?.poster_path ? `${prefixs}${m?.poster_path}` : ErrorImg
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
          </>
        )}
      </div>
    </>
  );
};

export default Row;
