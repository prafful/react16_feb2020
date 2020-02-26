import React from 'react';
import TodoItem from './todoitem';
import axios from 'axios'

class AllTodo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            newtodovalue:""
        }
        this.getNewTodo = this.getNewTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
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

    renderAllTodos = function(){
        return this.state.todos.map( item =>{
            console.log(item);
            return <TodoItem
                        key={item.id}
                        id={item.id}
                        todotext={item.todo_text}
                        status = {item.status}
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