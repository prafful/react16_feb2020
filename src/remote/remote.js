import React from 'react';
import UserData from './data';
import axios from "axios";

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
       // this.getRemoteData = this.getRemoteData.bind(this)

    }

    componentWillMount(){
        this.getRemoteData()
    }
    
    getRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
                    .then((res)=>{
                        console.log(res.data);
                        this.setState({users: res.data})
                        console.log(this.state.users);
                    }, (err)=>{
                        console.log(err);    
                    })
    }

/*
    test = function(){
        console.log("test");
    }

    test1 = ()=>{
        console.log("test 1");
    }
     successFun = function(response){
        console.log("API Call Success!")
        console.log(response.data);
    }

    failureFun = function() {
        console.log("API Call Fail")
        
    }     */


    displayAllUsers = function(){
       return this.state.users.map((u)=>{
            return (
                <UserData 
                    key={u.id}
                    name={u.name}
                    >
                </UserData>
            ) 
        })
    }

    render() { 
        return ( 
            <div>
                Data from REST API will be loaded here!
               {this.displayAllUsers()}

            </div>
         );
    }
}
 
export default RemoteData;