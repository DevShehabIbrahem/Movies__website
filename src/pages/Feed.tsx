import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Genres,
  Movies,
  MoviesDetails,
  Search,
  Sidebar,
  Tvmovies,
} from "../pages";

export default class Feed extends Component {
  render() {
    return (
      <div className="flex justify-center mt-[68px]">
        <div className="flex flex-col w-full md:w-[80%] mb-10">
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
    );
  }
}
