import React from 'react';

// BEGIN (write your solution here)
class Item extends React.Component{
    constructor(props){
        super(props)
        const {id, task, onRemove} = this.props;
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.props.onRemove(this.props.id)}>-</button>
                    </div>
                    <div className="col">{this.props.task}</div>
                    </div>
                <hr />
            </div>
        )
    }
}
export default Item;
// END
