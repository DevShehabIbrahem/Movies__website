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

const useFetchMovies = (url: string) => {
  const [movies, setMovies] = useState<any>([]);

  const state = useTypedSelector(selectStatus);

  const dispatch = useAppDispatch();
  useEffect(() => {
    async function getdata() {
      const { data } = await baseURL.get(`${url}`);
      setMovies(data.results);
    }
    getdata();
  }, []);

  return { movies };
};

export default useFetchMovies;
