import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {items: [], index: 0}
    }

    removeItem = (id) => (e) =>{
        e.preventDefault();
        const newItem = this.state.items.filter((item)=> item.id !== id);
        const newIndex = this.state.index > 0 ? this.state.index - 1 : this.state.index 
        this.setState({items: newItem, index: newIndex});
    }
    renderItem = (item) => {
        return (<button  key={item.id} type="button" className="list-group-item list-group-item-action" onClick={this.removeItem(item.id)}>
            {item.name}
        </button>)
    }

    addItem = (str) => (e) => {
        e.preventDefault();
        if (str == '+'){
            this.setState({index: this.state.index + 1})
            const newItems = [{id: uniqueId(), name: this.state.index + 1}, ...this.state.items]
            this.setState({items:  newItems})
        }else{
            const newIndex = this.state.index > 0 ? this.state.index - 1 : this.state.index
            this.setState({index: newIndex})
            const newItems = [{id: uniqueId(), name: newIndex}, ...this.state.items]
            this.setState({items: newItems})
        }        
    }
    
    render(){
        let items = this.state.items;
        return(
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.addItem('+')}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.addItem('-')}>-</button>
                </div>
                {items.length > 0 && 
                <div className="list-group">
                    {items.map((item) => this.renderItem(item))}
                </div>}
            </div>
        )
    }
}
export default Component;
// END
