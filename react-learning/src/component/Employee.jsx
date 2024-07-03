import React from "react";

class EmployeeComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            name:"Mr. Hadi",
            gender:"Men",
            salary: 10000,
            age:20
        };
    }
    changeAge=()=>{
        this.setState({
            age:document.getElementById("newAge").value
        })
    }

    render(){
        return(
            <div>
                <h1>hi i am employee</h1>
                <p>
                    name: {this.state.name} <br/>
                    gender: {this.state.gender} <br/>
                    salary: {this.state.salary} <br/>
                    Age : {this.state.age}
                </p>
                <input type="text" id="newAge"/>
                <button type="button" onClick={this.changeAge}>Change Age</button>
            </div>
        );
    }
}

export default EmployeeComponent;