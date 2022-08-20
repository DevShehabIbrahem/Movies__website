import { FC } from "react";
import Row from "../common/Row";
import Request from "../API/Requests ";

const Tvmovies: FC = () => {
  return <Row Reguest={Request.History} title="Tvmovies" poster girdRow />;
};

export default Tvmovies;
