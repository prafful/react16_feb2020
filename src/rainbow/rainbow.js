import React from 'react';

class Rainbow extends React.Component {
    state = {  }
    render() { 
        let rainStyle = {
            color: this.props.color,
            borderBottom: '2px solid red',
            display:'inline-block'
        }

        return ( 
            <h1 style={rainStyle}>A</h1>
         );
    }
}
 
export default Rainbow;