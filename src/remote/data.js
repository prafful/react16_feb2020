import React from 'react';

class UserData extends React.Component {
    name = "Prafful Daga"
    render() { 
        return (
            <div>
               Name: {this.props.name} from {this.props.company}, {this.props.city}
            </div>
          );
    }
}
 
export default UserData;