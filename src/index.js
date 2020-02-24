import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./firstcomponent";
import LocationComponent from "./secondComponent";


var divBlock = document.getElementById('container')

ReactDOM.render(
    <div>
       <MyComponent 
            fname="Prafful" 
            lname="Daga" 
            location="Singapore" 
            sal="22">13</MyComponent>
       <br></br><br></br>
       <MyComponent 
            fname="Okie" 
            lname="San" 
            location="Tokyo"
            sal="44">8</MyComponent>
       <br></br><br></br>
       <MyComponent 
            fname="Mike" 
            lname="Keith" 
            location="Iceland"
            sal="88">17</MyComponent>
    
    </div>
    ,
    divBlock)
