import React from 'react';

class Experience extends React.Component {
    state = {  }
    render() { 
        return ( 
            <span>
                Experience : {this.props.exp}
            </span>
         );
    }
}
 
export default Experience;