import { FC } from "react";

import Herosection from "../components/Herosection/Herosection";

import Row from "../common/Row";
import Request from "../API/Requests ";
import Sidebar from "../components/sidebar/Sidebar";

const Home: FC = () => {
  return (
    <>
      <Herosection />
      <div className="flex justify-center pt-2">
        <div className="w-[72%]">
          <Row Reguest={Request.Home} title="OrignialMovies" />
          <Row Reguest={Request.Comedy} title="Comedy" />
          <Row Reguest={Request.Action} title="Action" sidebar />
          <Row Reguest={Request.Fantasy} title="Fantasy" />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
