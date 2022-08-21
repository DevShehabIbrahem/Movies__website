import Row from "../common/Row";
import Request from "../API/Requests ";

import React, { Component } from "react";

export default class Movies extends Component {
  render() {
    return <Row Reguest={Request.Adventure} title="Tvmovies" girdRow />;
  }
}
