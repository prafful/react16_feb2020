import React from 'react';

class TodoItem extends React.Component {
    state = {  }
    render() { 
        return (
            <tr>
                <td>{this.props.id}</td>
                <td> {this.props.todotext}</td>
                <td>{this.props.status}</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
          );
    }
}
 
export default TodoItem;