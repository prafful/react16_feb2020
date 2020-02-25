import React from 'react';

class UserData extends React.Component {
    
    render() { 
        return (
            <div>
               Name: {this.props.name}
            </div>
          );
    }
}
 
export default UserData;