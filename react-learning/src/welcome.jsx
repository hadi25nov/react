// Welcome.js
import React from "react";
import './css/style.css';
import PropTypes from "prop-types";
import ChildComponent from "./ChildComponent.jsx";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="itemStyle">
        <h1> welcome on react {this.props.name} </h1>
        <ChildComponent />
      </div>
    );
  }
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
  };

export default Welcome;
