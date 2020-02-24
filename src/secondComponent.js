import React from 'react';

class LocationComponent extends React.Component {
   
    render() { 
        return (  
            <span>Location: {this.props.children} </span>
        );
    }
}
 
export default LocationComponent;