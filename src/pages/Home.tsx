import { FC, useEffect, useState } from "react";

import Herosection from "../components/Herosection/Herosection";

import Row from "../common/shared/Row";
import Request from "../API/Requests ";
import Sidebar from "../components/sidebar/Sidebar";
import Loading from "../common/shared/Loading/Loading";

const Home: FC = () => {
  return (
    <>
      <Herosection />

      <div className="flex justify-center pt-2 mb-[9rem] md:mb-0">
        <div className="w-[72%]">
          <Row Reguest={Request.Home} title="Original Movies" />
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
