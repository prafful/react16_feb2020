import React from 'react';

class Experience extends React.Component {
    state = {  }
    render() { 
        return ( 
            <span>
                Experience : {this.props.work}
            </span>
         );
    }
}
 
export default Experience;