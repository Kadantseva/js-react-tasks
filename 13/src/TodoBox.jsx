import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
class TodoBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {tasks: [], newValue: ''}
    }
    onRemove = (id) => (e) => {
        e.preventDefault();
        const newItems = this.state.tasks.filter((item) => item.id !== id);
        this.setState({ tasks: newItems });
    }
    addNewCard = (e) =>{
        e.preventDefault();
        const newItems = [{name: this.state.newValue, id: uniqueId()}, ...this.state.tasks];
        this.setState({ tasks: newItems });
        this.setState({newValue: ''})
    }
    onChange = (e) =>{
        this.setState({newValue: e.target.value})
    }
    render(){
        return(
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.addNewCard}>
                        <div className="me-3">
                            <input
                            type="text"
                            value={this.state.newValue}
                            onChange={this.onChange}
                            required=""
                            className="form-control"
                            placeholder="I am going..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                {this.state.tasks.map((task)=> <Item id={task.id} key={task.id} task={task.name} onRemove={this.onRemove}/>)}
            </div>
        )
    }
}
export default TodoBox
// END
