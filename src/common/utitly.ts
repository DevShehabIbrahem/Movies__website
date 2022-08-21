import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const fetchGenres = async (setGenres: any) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  setGenres(data.genres);
};
