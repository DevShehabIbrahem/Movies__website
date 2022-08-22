import { Component } from "react";
import Row from "../common/Row";
import Request from "../API/Requests ";

class Tvmovies extends Component {
  render() {
    return (
      <div>
        <Row Reguest={Request.History} title="Tv movies" poster girdRow />;
      </div>
    );
  }
}

export default Tvmovies;
