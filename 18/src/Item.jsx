import React from 'react';

// BEGIN (write your solution here)
class Item extends React.Component{
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-1" >{this.props.task.id}</div>
                    <div className="col">
                        {this.props.task.state == 'active' ? <a href="#" onClick={this.props.finishTask(this.props.task.id)} className="todo-task">{this.props.task.text}</a> : <s><a href="#" onClick={this.props.activateTask(this.props.task.id)} className="todo-task">{this.props.task.text}</a></s>}
                    </div>
                </div>
            </>
        )
    }
}
export default Item
// END
