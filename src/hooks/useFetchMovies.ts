import axios from "axios";
import { useEffect, useState } from "react";
import baseURL from "../API/baseURL";

const useFetchMovies = (url: string) => {
  const [movies, setMovies] = useState<any>([]);

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
