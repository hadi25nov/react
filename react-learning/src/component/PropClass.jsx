import React from "react";
import PropTypes from "prop-types";

class PropClass extends React.Component{
    constructor(props) {
        super(props);
      }
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}
PropClass.propTypes = {
    name: PropTypes.string.isRequired,
  };
export default PropClass;