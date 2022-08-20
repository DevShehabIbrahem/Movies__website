import { FC } from "react";
import Row from "../common/Row";
import Request from "../API/Requests ";

const Movies: FC = () => {
  return (
    <>
      <Row Reguest={Request.Adventure} title="Tvmovies" girdRow />
    </>
  );
};

export default Movies;
