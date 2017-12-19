import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateNames } from "./reducer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val, prop) {
    this.setState({ [prop]: val });
  }
  render() {
    console.log();
    const names = this.props.names.map((name, i) => {
      return <div key={i}>{name}</div>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input
            type="text"
            placeholder="Input name"
            onChange={e => this.handleChange(e.target.value, "input")}
          />
          <button
            onClick={e => this.props.updateNames(this.state.input)}
            type="button"
          >
            Submit
          </button>
        </header>
        {names}
      </div>
    );
  }
}

export default connect(s => s, { updateNames })(App);
