import { useNavigate } from "react-router-dom";
import usecutWords from "../../hooks/usecutWords";
import useRandomBanner from "../../hooks/useRandomBanner";
const Herosection = () => {
  const Navigate = useNavigate();
  const { banner } = useRandomBanner();
  const { CutWords } = usecutWords(banner);

  const Readmore = () => {
    Navigate(`/movie/${banner?.id}`);
  };
  return (
    <div
      className="text-white object-contain h-[590px] overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${banner?.backdrop_path}")`,
        backgroundPosition: "center center",
        position: "relative",
        width: "100%",
      }}
    >
      <div className=" ml-5 md:ml-[30px] pt-[12rem] md:pt-[140px] h-[190px] md:w-[38rem] relative z-10">
        <h1 className="text-[3rem] font-bold pb-[0.3rem]">
          {banner?.title || banner?.name || banner?.original_name}
        </h1>

        <div>
          <button
            className="bg-[#171717] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded"
            onClick={Readmore}
          >
            Read More
          </button>
        </div>

        <h1 className="w-[20rem] md:w-[45rem] leading-[1.6] text-[1.1rem] font-bold pt-[1rem] max-w-[360px] h-[80px]">
          {CutWords}
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
    </div>
  );
};

export default Herosection;
