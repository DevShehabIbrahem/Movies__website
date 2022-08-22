import Row from "../common/Row";
import Request from "../API/Requests ";

import { Component } from "react";

export default class Movies extends Component {
  render() {
    return <Row Reguest={Request.Adventure} title="Tvmovies" girdRow />;
  }
}
