import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { getList } from "../../actions/form";
import countriesList from "../../redusers/countries";

class App extends Component {
  render() {
    const {
      data,
      logClick = () => {
        console.log(data);
      }
    } = this.props;
    return (
      <div className="container">
        <button
          onClick={() => {
            this.props.onGetList();
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
        <ul>{data.map(e => <li>{e}</li>)}</ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.form
  }),
  dispatch => ({
    onGetList: () => {
      dispatch(getList());
    }
  })
)(App);
