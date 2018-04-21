import React from "react";

const data = [
  {
    title: "1",
    description: "Some text here"
  },
  {
    title: "2",
    description: "Another text here"
  },
  {
    title: "3",
    description: "3 Another text"
  }
];

const Block = ({ id, title, description, className, onClick }) => {
  return (
    <div className="container">
      <h2 id={id} onClick={() => onClick(id)}>
        {title}
      </h2>
      <div className={`description ${className}`}>{description}</div>
    </div>
  );
};

class App extends React.Component {
  state = {
    activeID: null
  };
  handleVisibility(id) {
    this.setState({
      activeID: id === this.state.activeID ? null : id
    });
  }
  render() {
    return (
      <div className="main">
        <h1>FAQ</h1>
        {data.map((item, i) => (
          <Block
            key={i}
            id={i}
            {...item}
            onClick={this.handleVisibility.bind(this)}
            className={this.state.activeID === i ? "visible" : "hidden"}
          />
        ))}
      </div>
    );
  }
}

export default App;
