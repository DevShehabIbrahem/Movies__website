import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Request from "../API/Requests ";
import Row from "../common/Row";
import GenresMovies from "../components/Genres/GenresMovies";
import Herosection from "../components/Herosection/Herosection";
import Sidebar from "../components/sidebar/Sidebar";
import Genres from "./Genres";

import Home from "./Home";
import Movies from "./Movies";
import MoviesDetails from "./MoviesDetails";
import Search from "./Search";
import Tvmovies from "./Tvmovies";

type Props = {};

const Feed = (props: Props) => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="flex flex-col w-[80%]">
          <Routes>
            <Route path="moviselist" element={<Movies />} />
            <Route path="Tvmovies" element={<Tvmovies />} />
            <Route path="movie/:id" element={<MoviesDetails />} />
            <Route path="search" element={<Search />} />
            <Route path="/*" element={<Genres />} />
          </Routes>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Feed;
