import React from 'react';
import TodoItem from './todoitem';
import axios from 'axios'

class AllTodo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            newtodovalue:"",
            edittodovalue:"",
            editstatus:"",
            edittodoid:0
        }
        this.getNewTodo = this.getNewTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodoById = this.deleteTodoById.bind(this)
        this.editTodoById = this.editTodoById.bind(this)
        this.editTodoText = this.editTodoText.bind(this)
        this.editTodoStatus = this.editTodoStatus.bind(this)
        this.updateTodoItem = this.updateTodoItem.bind(this)

    }


    componentWillMount(){
        this.getAllTodos()
    }

    getAllTodos(){
        axios.get('http://localhost:3000/alltodo/')
            .then(res=>{
                console.log(res.data);
                this.setState({todos: res.data})
                console.log(this.state.todos);
            }, err =>{
                console.log(err);
            })

    }

    deleteTodoById = function(receivedId){
        console.log("Delete Todo By Id! " + receivedId);
        axios.delete("http://localhost:3000/alltodo/" + receivedId)
                .then(res=>{
                    console.log(res);
                    this.getAllTodos()
                }, err=>{
                    console.log(err);
                })
    }

    editTodoById = function(receivedId){
        console.log("Inside Edit Todo By Id! " + receivedId);
        //edittodovalue:"",
        //editstatus:""
        //use axios to get the todo item with specifc id
        axios.get('http://localhost:3000/alltodo/' + receivedId)
            .then(response => {
                console.log(response);
                this.setState({edittodovalue: response.data.todo_text})
                this.setState({editstatus: response.data.status})
                this.setState({edittodoid: response.data.id})
            }, error =>{
                console.log(error);
            })
        //this.setState({edittodovalue: this.state.todos[receivedId].todo_text})
        //this.setState({editstatus: this.state.todos[receivedId].status})
    }

    renderAllTodos = function(){
        return this.state.todos.map( item =>{
            console.log(item);
            return <TodoItem
                        key={item.id}
                        id={item.id}
                        todotext={item.todo_text}
                        status = {item.status}
                        deleteMe = {this.deleteTodoById}
                        editMe= {this.editTodoById}
                    >
                    </TodoItem>
        })

        
    }

    addTodo = function() {
        console.log("Adding new todo item from text field!");
        //"todo_text": "Plan a trip to pichavaram!",
        //"status": "done"
        if (!this.state.newtodovalue == ''){
            var newtodo = {
                "todo_text":this.state.newtodovalue,
                "status":"new"
            }
            //post newtodo to axois.post
            axios.post("http://localhost:3000/alltodo/", newtodo)
                            .then(res=>{
                                console.log(res);  
                                //update the state=> this.state.todos so that
                                //it will auto re-execute the render function
                                this.getAllTodos()  
                                //set newtodovalue state to '' after adding new todo!
                                this.setState({newtodovalue: ''})                       
                            }, err=>{
                                console.log(err);
                            })
        }
       
    }
    
    getNewTodo= function(event){
        console.log(event.target.value);
        this.setState({newtodovalue: event.target.value})

    }

    editTodoText = function(event){
        console.log(event.target.value);
        this.setState({edittodovalue: event.target.value})
    }

    editTodoStatus = function(event){
        console.log(event.target.value);
        this.setState({editstatus: event.target.value})
    }

    updateTodoItem = function(){
        var updatedTodo = {
            "todo_text": this.state.edittodovalue,
            "status": this.state.editstatus
        } 
        console.log(updatedTodo);
        axios.put('http://localhost:3000/alltodo/' 
                    + this.state.edittodoid, updatedTodo)
            .then(response =>{
                console.log(response);
                this.getAllTodos()
            }, error=>{
                console.log(error);
            })
    }

    render() { 
        return ( 
            <div>
                Add Todo: 
                <fieldset>
                    <legend>New</legend>
                    <label>Todo: </label>
                    <input type="text" autoFocus value={this.state.newtodovalue} onChange={this.getNewTodo}/>
                    &nbsp;
                    <button onClick={this.addTodo}>Add</button>
                </fieldset>    
                <br></br>
                Update Todo:
                <fieldset>
                    <legend>Edit</legend>
                    <label>Id: </label>
                    <input type="text" 
                           value={this.state.edittodoid} 
                           readOnly />
                           <br></br>
                    <label>Todo:</label>
                    <input type="text" 
                           value={this.state.edittodovalue} 
                           onChange={this.editTodoText} />
                    <br></br>
                    <label>Status:</label>
                    <input type="text" 
                           value={this.state.editstatus} 
                           onChange={this.editTodoStatus} />
                    &nbsp;
                    <button onClick={this.updateTodoItem}>Update</button>
                </fieldset>
                <br></br>
                <br></br>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Todo Text</th>
                            <th>Status</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderAllTodos()} 
                    </tbody>
                
                </table>
                
                
            </div>
           
         );
    }
}
 
export default AllTodo