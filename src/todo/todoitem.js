import React from 'react';

class TodoItem extends React.Component {
    constructor(props){
        super(props)

        this.deleteTodoEvent = this.deleteTodoEvent.bind(this)
        this.editTodoEvent = this.editTodoEvent.bind(this)
    }

    deleteTodoEvent = function(){
        console.log("Delete function called! for "  + this.props.id );
        this.props.deleteMe(this.props.id)
    }

    editTodoEvent = function(){
        console.log("Edit todo! " + this.props.id);
        this.props.editMe(this.props.id)
    }

    render() { 
        return (
            <tr>
                <td>{this.props.id}</td>
                <td> {this.props.todotext}</td>
                <td>{this.props.status}</td>
                <td>
                    <button onClick={this.editTodoEvent}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteTodoEvent}>Delete</button>
                </td>
            </tr>
          );
    }
}
 
export default TodoItem;