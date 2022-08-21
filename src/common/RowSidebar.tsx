import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import useRandomTrinding from "../hooks/useRandomTrinding";
import { prefixs } from "./styles";

const RowSidebar = ({
  Reguest,
  title,
}: {
  Reguest: string | any;
  title: string;
}) => {
  const { trinding } = useRandomTrinding(Reguest);

  return (
    <>
      <h3 className=" border-l-4 border-[#ccc] mb-2 mt-10 uppercase text-[1.3rem] font-bold">
        <p className="pl-1"> {title}</p>
      </h3>
      <div className="flex justify-center items-center opacity-[0.8] hover:opacity-[1] duration-300 transition-all ">
        <Link to={`/movie/${trinding?.id}`} key={trinding?.id} className="flex">
          <div className=" overflow-hidden   mt-5 w-[50%]">
            <img
              src={`${prefixs}${trinding?.poster_path}`}
              alt="Movie"
              className="rounded-2xl border-2 border-red-200 w-full  "
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-5 ml-1 gap-[2rem] w-[50%]">
            <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem]  px-[9px] rounded-[100px]">
              {trinding?.vote_average}
              <AiFillStar />
            </span>

            <span className="text-[1rem] text-center pt-2 flex items-center justify-center font-bold">
              {trinding?.original_title}
            </span>
            <span className="text-[1rem] text-center pt-2 flex items-center justify-center font-bold">
              {trinding?.release_date}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RowSidebar;
