import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./firstcomponent";
import LocationComponent from "./secondComponent";
import Rainbow from "./rainbow/rainbow";


var divBlock = document.getElementById('container')
var rainBlock = document.getElementById('rain')


ReactDOM.render(
     <div>
          <MyComponent
               fname="Prafful"
               lname="Daga"
               location="Singapore"
               sal="22">
               13
     </MyComponent>
          <br></br><br></br>
          <MyComponent
               fname="Okie"
               lname="San"
               location="Tokyo"
               sal="44">
               8
     </MyComponent>
          <br></br><br></br>
          <MyComponent
               fname="Mike"
               lname="Keith"
               location="Iceland"
               sal="88">
               17
     </MyComponent>

     </div>
     ,
     divBlock)

ReactDOM.render(<div>
                    <Rainbow color="violet"></Rainbow>
                    <Rainbow color="indigo"></Rainbow>
                    <Rainbow color="blue"></Rainbow>
                    <Rainbow color="green"></Rainbow>
                    <Rainbow color="yellow"></Rainbow>
                    <Rainbow color="orange"></Rainbow>
                    <Rainbow color="red"></Rainbow>
               </div>
     , rainBlock)

