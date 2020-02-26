import React from 'react';

class UserData extends React.Component {
    name = "Prafful Daga"

    constructor(props){
        super(props)
        this.userClicked = this.userClicked.bind(this)
    }

    userClicked = function(){
        console.log("User clicked with id: " + this.props.id);
        this.props.callme(this.props.id)
    }

    render() { 
        return (
            <tr>
                <td>{this.props.id}</td>
               <td>{this.props.name}</td>
               <td>{this.props.company}</td>  
               <td>{this.props.city}</td>
               <td>
                    <button onClick={this.userClicked}>Edit</button>
               </td>
               <td>
                    <button>Delete</button>
               </td>
             
            </tr>
          );
    }
}
 
export default UserData;