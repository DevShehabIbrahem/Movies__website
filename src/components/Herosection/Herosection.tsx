import useRandomBanner from "../../hooks/useRandomBanner";

const Herosection = () => {
  const { banner } = useRandomBanner();

  let CutWords =
    banner?.overview?.length > 100
      ? banner?.overview.slice(0, 100) + ",..."
      : banner?.overview;
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
      <div className="ml-[30px] pt-[140px] h-[190px] w-[38rem] relative z-10">
        <h1 className="text-[3rem] font-bold pb-[0.3rem]">
          {banner?.title || banner?.name || banner?.original_name}
        </h1>

        <div>
          <button className="bg-[#171717] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded">
            play
          </button>
          <button className="bg-[#171717] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded">
            Read More
          </button>
        </div>

        <h1 className="w-[45rem] leading-[1.6] text-[1.1rem] font-bold pt-[1rem] max-w-[360px] h-[80px]">
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
