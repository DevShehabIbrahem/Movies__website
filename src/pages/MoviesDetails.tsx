import { FC } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import {
  FetchMoviesDetails,
  selectStatus,
} from "../Redux/Reducers/MoviesDSlice";

import { useTypedSelector } from "../Redux/store";
import { useAppDispatch } from "../Redux/hook";

const MoviesDetails: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const MoviesDetails = useTypedSelector(selectStatus);
  console.log(MoviesDetails);

  const prefixs = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    dispatch(FetchMoviesDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <img src={`${prefixs}${MoviesDetails?.poster_path}`} alt="" />
      <h1>{MoviesDetails.title}</h1>
    </>
  );
};

export default MoviesDetails;
