import React, { Component } from "react";
import Beer from "./Beer"

export class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((resolve) => resolve.json())
      .then((data) => {
        this.setState({
          beers: data,
        });
      });
  }

  componentDidUpdate() {
    console.log("beers", this.state.beers);
  }

  render() {
    return (
      <ul className="beers">
        {this.state.beers.map(({ id, name, image_url }) => (
          <Beer name={name} image={image_url} key={id}/>
        ))}
      </ul>
    );
  }
}

export default Beers;
