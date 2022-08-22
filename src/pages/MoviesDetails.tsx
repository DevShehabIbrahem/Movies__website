import { FC } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../Scss/styles.scss";
import {
  FetchMoviesDetails,
  selectStatus,
} from "../Redux/Reducers/MoviesDSlice";
import { useTypedSelector } from "../Redux/store";
import { useAppDispatch } from "../Redux/hook";
import { prefixs } from "../common/styles";
import Errorimage from "../assets/Error.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MoviesDetails: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const MoviesDetails = useTypedSelector(selectStatus);

  useEffect(() => {
    dispatch(FetchMoviesDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {/* Banner */}
      <div
        className="overflow-hidden text-white object-contain h-[590px]"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${MoviesDetails?.backdrop_path}")`,
          backgroundPosition: "center center",
          position: "relative",
          width: "100%",
        }}
      >
        <div className="ml-[30px] pt-[80px] md:pt-[140px] h-[190px] md:w-[38rem] relative z-10">
          <h1 className="text-[3rem] font-bold pb-[0.3rem]">
            {MoviesDetails?.title ||
              MoviesDetails?.name ||
              MoviesDetails?.original_name}
          </h1>
        </div>

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundImage:
              " linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)",
          }}
        />
        <div className="relative top-28 left-3 md:left-10 ">
          <img
            src={
              MoviesDetails?.poster_path
                ? `${prefixs}${MoviesDetails?.poster_path}`
                : Errorimage
            }
            alt="poster"
            className="w-[12rem] z-50 rounded-2xl"
          />
        </div>
      </div>

      {/* Details */}
      <div className="div_style mb-[9rem] md:mb-0 text-[1.5rem]  mt-11 px-5 md:px-0 md:ml-12 max-w-2xl gap-5 ">
        <div>
          <span className="title_span">Name</span>
          <span>{MoviesDetails?.title || MoviesDetails.original_title}</span>
        </div>

        <div>
          <span className="title_span div_style">Story</span>
          <span>{MoviesDetails?.overview} </span>
        </div>
        <div className="flex items-center">
          <span className="title_span">Rate</span>
          <span>
            <CircularProgressbar
              className="w-[7rem] h-[7rem] "
              value={MoviesDetails?.vote_average}
              text={MoviesDetails?.vote_average + "%"}
            />
          </span>
        </div>
        <div>
          <span className="title_span">date</span>
          <span>{MoviesDetails?.release_date} </span>
        </div>
        <div>
          <span className="title_span">language</span>
          <span>{MoviesDetails?.original_language} </span>
        </div>
        <span className="flex flex-wrap md:flex-nowrap items-start md:flex-row gap-2 md:gap-5">
          <p className="title_span">Type</p>
          {MoviesDetails?.genres?.map(({ name }: { name: string }) => (
            <p className="text-white text-[0.8rem]  border w-auto px-2 border-red-500 text-center rounded-[100px]">
              <p className="font-bold">{name}</p>
            </p>
          ))}
        </span>
      </div>
    </>
  );
};

export default MoviesDetails;
