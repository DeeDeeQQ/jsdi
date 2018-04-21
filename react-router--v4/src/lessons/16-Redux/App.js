import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  state = {
    editID: null,
    inputCurrentState: null
  };
  inputChange(e) {
    this.setState({
      inputCurrentState: e.target.value
    });
  }
  isEdit(i, id) {
    if (id === this.state.editID) {
      return (
        <input
          name="edit"
          value={this.state.inputCurrentState}
          onChange={this.inputChange.bind(this)}
        />
      );
    }
    return i;
  }

  render() {
    const {
      data,
      handleClick = () => {},
      onDelete = () => {},
      actSave = () => {},
      unDo = () => {
        this.setState({
          editID: null
        });
      },
      onEdit = (key, i) => {
        this.setState({
          editID: key,
          inputCurrentState: i
        });
      }
    } = this.props;
    return (
      <div className="container">
        <input name="name" ref={el => (this.input = el)} />
        <button
          onClick={() => {
            handleClick(this.input.value);
            this.input.value = "";
          }}
        >
          Save
        </button>
        <ul>
          {data.map((i, key) => (
            <li key={key}>
              {this.isEdit(i, key)}
              {(key === this.state.editID && (
                <button onClick={() => unDo(key)}>UNDO</button>
              )) || <button onClick={() => onDelete(key)}>Delete</button>}
              {(key === this.state.editID && (
                <button
                  onClick={() =>
                    actSave(key, this.state.inputCurrentState, unDo(key))
                  }
                >
                  Save
                </button>
              )) || <button onClick={() => onEdit(key, i)}>Edit</button>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state,
    editID: null
  }),
  dispatch => ({
    handleClick: value =>
      dispatch({
        type: "ADD_TRACK",
        payload: value
      }),
    onDelete: idx =>
      dispatch({
        type: "DELETE_TRACK",
        payload: idx
      }),
    actSave: (index, value) =>
      dispatch({
        type: "EDIT_TRACK",
        payload: index,
        value: value
      })
  })
)(App);
