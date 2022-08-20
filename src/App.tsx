import { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import RoutesPages from "./common/RoutesPages";
import Footer from "./components/Footer/Footer";
import GenresMovies from "./components/Genres/GenresMovies";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./pages/Feed";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";
import Search from "./pages/Search";
import Tvmovies from "./pages/Tvmovies";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Feed />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
