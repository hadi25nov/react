import PropTypes from "prop-types";

function DemoComponent(props){
    return(
        <div>
            <h3>Say : {props.message}</h3>
            <h3>number : {props.num}</h3>
        </div>
    )
}
DemoComponent.propTypes = {
    message : PropTypes.string.isRequired,
    num : PropTypes.string.isRequired
}

export default DemoComponent;