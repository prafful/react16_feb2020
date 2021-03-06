import React from 'react';
import LocationComponent from './secondComponent';
import Experience from './workexperience';
import Salary from './salary';

class MyComponent extends React.Component {
    name1 = "Prafful Daga"
    //render function will define the view of component
    //view is written in JSX
    render(){
        return (
            <span>
                <div><b>Hello {this.props.fname} {this.props.lname}!</b></div>
                <LocationComponent>{this.props.location}</LocationComponent>
                <br></br>
                <Experience work = {this.props.children}></Experience>
                <br></br>
                <Salary>{this.props.sal}</Salary>
            </span>
        )
    }
}

export default MyComponent
