import {Component} from "react";

class ContohDua extends Component {

    constructor(props){
        super(props)
        this.state = {backgroundColor:"blue"};
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){
        this.setState({backgroundColor:"red"});
    }

    render() {
        return(
            <div style={{backgroundColor:this.state.backgroundColor}}>
                <button onClick={this.handleButtonClick}>Ubah warna</button>
            </div>
        );
    }
} 

export default ContohDua;