import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component{
    constructor(props){
        super(props)
        this.getTasks()
        this.state = {activeTasks: [], finishedTasks: [],  text: ''}
    }
    getTasks = async () => {
        const res = await axios.get(routes.tasksPath());
        const tasks = res.data
        let activeTasks = []
        let finishedTasks = []
        if (tasks.length != 0){
            tasks.map((task) => {
                if (task.state == 'active'){
                    activeTasks = [...activeTasks, task]
                }else{
                    finishedTasks = [...finishedTasks, task]
                }
            })
            this.setState({ activeTasks: activeTasks, finishedTasks:finishedTasks });
        }
    }

    finishTask = (id) => async (e) => {
        e.preventDefault();
        const res = await axios.patch(routes.finishTaskPath(id));
        const task = res.data;
        let finishedTasks = [task, ...this.state.finishedTasks]
        const activeTasks = this.state.activeTasks.filter((item) => item.id !== id);
        this.setState({finishedTasks: finishedTasks, activeTasks: activeTasks});
    }

    activateTask = (id) => async (e) => {
        e.preventDefault();
        const res = await axios.patch(routes.activateTaskPath(id));
        const task = res.data;
        let activeTasks = [task, ...this.state.activeTasks]
        const finishedTasks = this.state.finishedTasks.filter((item) => item.id !== id);
        this.setState({finishedTasks: finishedTasks, activeTasks: activeTasks});
    }

    createNewTask = async (e) => {
         e.preventDefault();
         if (this.state.text.length != 0){
            const res = await axios.post(routes.tasksPath(), {"text": this.state.text});
            const task = res.data;
            let activeTasks = [task, ...this.state.activeTasks]
            this.setState({activeTasks: activeTasks, text: ""});
        }
    } 
    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };
    render(){
        const text = this.state.text
        return(
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.createNewTask}>
                        <div className="d-flex col-md-3">
                            <input
                            onChange={this.handleChange}
                            className="form-control me-3"
                            placeholder="I am going..."
                            required
                            type="text"
                            value={text}
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>
                {this.state.activeTasks.length ? <div className="todo-active-tasks">
                    {this.state.activeTasks.sort((a,b) => b.id - a.id).map((task) =>
                        <Item  key={task.id} task={task} finishTask={this.finishTask}/>
                    )}
                </div> : null}

                {this.state.finishedTasks.length ? <div className="todo-finished-tasks">
                     {this.state.finishedTasks.sort((a,b) => b.id - a.id).map((task) =>
                        <Item  key={task.id} task={task} activateTask={this.activateTask}/>
                    )}
                </div> : null}
            </div>
        )
    }
}
export default TodoBox;
// END
