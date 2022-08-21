import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import Genres from "./Genres";

import Movies from "./Movies";
import MoviesDetails from "./MoviesDetails";
import Search from "./Search";
import Tvmovies from "./Tvmovies";

const Feed: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-[100px]">
        <div className="flex flex-col w-full md:w-[80%]">
          <Routes>
            <Route path="Movies" element={<Movies />} />
            <Route path="TvShow" element={<Tvmovies />} />
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
