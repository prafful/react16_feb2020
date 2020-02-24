import React from 'react';

class Salary extends React.Component {
    constructor(props){
        super(props)
        //define 2 states -> mysalary and myincrement
        this.state = {
           mysalary : parseInt(this.props.children),
           myincrement: 0
        }
        this.increaseSalary = this.increaseSalary.bind(this)
        this.giveIncrement = this.giveIncrement.bind(this)
    }

    increaseSalary = function(){
        console.log("Salary Hiked!");
        //below will not work!
        //this.state.mysalary = this.state.mysalary + 1
        //{what_state_you_want_to_change: what_is_new_value}
        this.setState({mysalary: this.state.mysalary + 1 })
    }

    giveIncrement = function(){
        console.log("Increment Given!");
        this.setState({myincrement: this.state.myincrement + 1 })
    }
    
    render() { 
        return (
            <span>            
                <span>Salary:{this.state.mysalary} </span>
                <br></br>
                <span>Increment: {this.state.myincrement}</span>
                <br></br>
                <button onClick={this.increaseSalary} >Salary +</button> &nbsp; 
                <button onClick={this.giveIncrement}>Increment +</button>
            </span>

          );
    }
}
 
export default Salary;