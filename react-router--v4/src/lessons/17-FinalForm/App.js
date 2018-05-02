import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const {
      data,
      logClick = () => {
        console.log(data);
        data.map(e => console.log(e.name));
      },
      handleClick = () => {}
    } = this.props;
    console.log(data);
    return (
      <div className="container">
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Show
        </button>
        <button
          onClick={() => {
            logClick();
          }}
        >
          log
        </button>
        <ul>{data.map(e => <li>{e.name}</li>)}</ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    handleClick: () =>
      dispatch({
        type: "VIEW_LIST"
      })
  })
)(App);
