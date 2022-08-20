import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseURL from "../API/baseURL";
import {
  FetchMoviesDetails,
  selectStatus,
} from "../Redux/Reducers/MoviesDSlice";
import { useTypedSelector } from "../Redux/store";

import { useAppDispatch } from "../Redux/hook";

const useGenres = (id: any) => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    async function getgenres() {
      const { data } = await baseURL.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e99375d6ca88c9406621028a59f9ddfe&with_genres=${id}`
      );
      setMovies(data.results);
    }
    getgenres();
  }, [id]);

  return { movies };
};

export default useGenres;
