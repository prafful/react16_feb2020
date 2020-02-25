import React from 'react';
import ReactDOM from "react-dom";

class MyLifecycle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.changeCounter = this.changeCounter.bind(this)
    }

    //componentWillMount
    //componentDidMount
    //componentWillUpdate
    //componentDidUpdate
    //componentWillUnmount
    //componentWillReceiveProps
 
    componentWillMount(){
        console.log(" MyLifecycle Component will mount NOW!");
    }

    componentDidMount(){
        console.log(" MyLifecycle Component is already mounted!");
    }

    componentWillUpdate(){
        console.log(" MyLifecycle Component will update!");
        //alert("in willupdate. Value of state is " + this.state.counter)
    }

    componentDidUpdate(){
        console.log(" MyLifecycle Component already updated!");
        //alert("in didupdate. Value of state is " + this.state.counter)
    }

    componentWillUnmount(){
        console.log("Unmounted the Mylifecyle component from page");

    }

    changeCounter = function(){
        this.setState({counter: this.state.counter + 2})
        //alert("in change counter. Value of state is " + this.state.counter)
    }

    removeMe = function(){
        ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle"))
        
    }

    render() { 
        console.log("In render function!");
        //alert("in render function!")
        return (
            <div>
                <h1>Component Life Cycle!</h1>
                <h3>State: {this.state.counter}</h3>
                <button onClick={this.changeCounter} >Change Counter</button>
                <button onClick={this.removeMe} >Remove</button>
                
            </div>
          );
    }
}
 
export default MyLifecycle;