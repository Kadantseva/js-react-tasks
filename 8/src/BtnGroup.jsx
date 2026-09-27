import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class BtnGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {primaryLeft: false, primaryRight: false};
    }
    onChangeClassLeft = () => {
        this.setState(({ primaryRight }) => ({ primaryRight: this.state.primaryLeft }));
        this.setState(({ primaryLeft }) => ({ primaryLeft: !primaryLeft }));
    };
    onChangeClassRight = () => {
        this.setState(({ primaryLeft }) => ({ primaryLeft: this.state.primaryRight }));
        this.setState(({ primaryRight }) => ({ primaryRight: !primaryRight }));
    };
    render(){
        const buttonClassLeft = cn([
            'btn',
            this.state.primaryLeft ? 'btn-secondary left active' : 'btn-secondary left'
        ])
        const buttonClassRight = cn([
            'btn',
            this.state.primaryRight ? 'btn-secondary right active' : 'btn-secondary right'
        ])
        return (
            <div className="btn-group" role="group">
                <button type="button" disabled={this.state.primaryLeft} className={buttonClassLeft} onClick={this.onChangeClassLeft} >Left</button>
                <button type="button" disabled={this.state.primaryRight} className={buttonClassRight} onClick={this.onChangeClassRight}>Right</button>
            </div>
        )
    }
}
export default BtnGroup;
// END
