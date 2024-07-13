import React from "react";
import "./App.css";

import FactTitle from "./assets/FactTitle.jsx";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fact: "",
    };
  }
  componentDidMount() {
    fetch("https://dog-api.kinduff.com/api/facts").then((res) => {
      res.json().then((data) => {
        this.setState({
          fact: data.facts[0],
        });
      });
    });
  }
  render() {
    return (
      <div className="main">
        <h1>Your Daily Dose of Dog Love and Knowledge!</h1>
        <div className="fact">
          <FactTitle fact={this.state.fact}></FactTitle>
        </div>
      </div>
    );
  }
}
export default App;
