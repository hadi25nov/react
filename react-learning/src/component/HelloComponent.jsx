
import PropTypes from "prop-types";
import DemoComponent from "./DemoComponent";
function HelloComponent(props){
    return (
        <div>
            <h1>firstname : {props.firstName} </h1>
            <h1>lastname : {props.lastName} </h1>
            <hr/>
            <DemoComponent message="baca pesan ini" num="1"/>
        </div>
    )
}
HelloComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };

export default HelloComponent;