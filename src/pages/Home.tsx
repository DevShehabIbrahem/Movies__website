import { FC, useEffect, useState } from "react";

import Herosection from "../components/Herosection/Herosection";

import Row from "../common/Row";
import Request from "../API/Requests ";
import { Outlet, Route, Routes } from "react-router-dom";
import Search from "./Search";
import GenresMovies from "../components/Genres/GenresMovies";
import Sidebar from "../components/sidebar/Sidebar";
import Movies from "./Movies";
import Feed from "./Feed";
import Genres from "./Genres";

const Home: FC = () => {
  return (
    <>
      <Herosection />
      <div className="flex  justify-center">
        <div className="w-[70rem]">
          <Row Reguest={Request.Home} title="OrignialNetflix" />
          <Row Reguest={Request.Comedy} title="Comedy" />
          <Row Reguest={Request.Action} title="Action" />
          <Row Reguest={Request.Fantasy} title="Fantasy" />
          <Row Reguest={Request.History} title="History" />
          <Row Reguest={Request.War} title="War" />
          <Row Reguest={Request.Horror} title="Horror" />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
