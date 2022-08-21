import { FC } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer: FC = () => {
  return (
    <div className="fixed w-full left-0 bottom-0 flex flex-col mt-auto gap-5 items-center md:flex-row px-5 justify-between py-3 bg-footer z-50 ">
      <span className="font-bold">Copyright _Shehab-Morgan</span>
      <div className="flex items-center gap-4">
        <p className="font-bold"> Contact me:</p>
        <a href="https://github.com/DevShehabIbrahem">
          <AiOutlineGithub className="text-[25px]" />
        </a>
        <a href="https://www.linkedin.com/in/shehab-ibrahem/">
          <BsLinkedin className="text-[25px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
