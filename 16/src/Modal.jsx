import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = (props) => <div className="modal-header">{props.children} <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={props.toggle}></button></div>;
const Body = (props) => <div className="modal-body">{props.children}</div>;
const Footer = (props) => <div className="modal-footer">{props.children}</div>;


class Modal extends React.Component{
    static Header = Header
    static Body = Body
    static Footer = Footer
    constructor(props) {
        super(props);
    }
    
    render(){
    
        const {isOpen} = this.props
        const className = cn({
            'fade show': isOpen
        })
        const style =  cn({
            'none': !isOpen,
            'contents': isOpen
        })
        return(<div className={className} role="dialog" style={{display: style}}>{this.props.children}</div>)
    }
}
export default Modal
// END
