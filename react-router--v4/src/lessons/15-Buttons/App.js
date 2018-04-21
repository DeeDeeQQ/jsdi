import React from "react";

const Button = ({ style, theme = "orange", size, className = "", ...rest }) => {
  const sizeClassName = size ? `button--${size}` : "";
  return (
    <button
      className={`button ${className} ${sizeClassName} theme-${theme}`}
      style={{ paddingLeft: 20, ...style }}
      {...rest}
    />
  );
};

const App = () => (
  <div>
    <Button size="medium" style={{}} theme="blue">
      <div>Blue button</div>
    </Button>
    <Button size="large" style={{}}>
      <div>Orange button</div>
    </Button>
  </div>
);

export default App;
