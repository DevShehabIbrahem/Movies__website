import axios from "axios";
import { FC, useEffect, useState } from "react";
import baseURL from "../API/baseURL";
const useGenres = (id: any) => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    async function getgenres() {
      const { data } = await baseURL.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}`
      );
      setMovies(data.results);
    }
    getgenres();
  }, [id]);

  return { movies };
};

export default useGenres;
