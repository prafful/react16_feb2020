import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./firstcomponent";
import LocationComponent from "./secondComponent";


var divBlock = document.getElementById('container')

ReactDOM.render(
    <div>
       <MyComponent fname="Prafful" lname="Daga" location="Singapore">13</MyComponent>
       <br></br><br></br>
       <MyComponent fname="Okie" lname="San" location="Tokyo">8</MyComponent>
       <br></br><br></br>
       <MyComponent fname="Mike" lname="Keith" location="Iceland">17</MyComponent>
    
    </div>
    ,
    divBlock)
