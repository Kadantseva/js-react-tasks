import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Collapse extends React.Component{
    constructor(props){
        super(props);
        this.state = {isShow: this.props?.opened}
    }
    
    
    toggleText = () => {
        const {isShow} = this.state;
        this.setState({isShow: !isShow})
    }
    render(){
        const {isShow} = this.state;
        const className = cn(('collapse'),{
            'show': isShow
        })
        return(
            <div>
                <p>
                    <a
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#"
                    role="button"
                    aria-expanded={isShow}
                    onClick={this.toggleText}
                    >Link with href</a
                    >
                </p>
                {this.props.text && <div className={className}>
                    <div className="card card-body">{this.props.text}</div>
                    </div>
                }
                
            </div>
        )
    }
}
Collapse.defaultProps = {
    opened: true,
};
export default Collapse;

// END
