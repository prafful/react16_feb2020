import React from 'react';
import UserData from './data';
import axios from "axios";

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: [],
            singleuser:''
        }
        this.success = this.success.bind(this)
        this.callMeForEachElement = this.callMeForEachElement.bind(this)
        this.userCalledMe = this.userCalledMe.bind(this)
    }


    componentWillMount(){
        this.getRemoteData()
    }
    
    getRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(this.success, this.failure)
    }

    success = function(res){
        console.log(res);
        console.log(res.data);
        this.setState({users: res.data})
        console.log(this.state.users);
        console.log(this.state.users[0].name);
        this.setState({singleuser: this.state.users[0].name})
    }

    failure = function(error){
        console.log(error);
    }

    displayAllUsers = function(){
        return this.state.users.map(this.callMeForEachElement)
    }

    userCalledMe = function(receivedID){
        console.log("I am being called from Child Component Via Props for: " + receivedID);
        console.log("I am working with following JSON object from array of this.state.users: ");
        console.log(this.state.users[receivedID-1]);

    }

    callMeForEachElement = function(user){
        console.log(user.name);
        return (<UserData
                    key = {user.id}
                    id= {user.id}
                    name={user.name}
                    city={user.address.city}
                    company={user.company.name}
                    callme = {this.userCalledMe}
                ></UserData>)
    }


    render() { 
        return ( 
            <div>
                Data from REST API will be loaded here!
                <table border="1">
                    
                
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Company</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.displayAllUsers()}
                </tbody>
                </table>
            </div>
         );
    }
}
 
export default RemoteData;