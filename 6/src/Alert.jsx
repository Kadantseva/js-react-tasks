import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
    class Alert extends React.Component{
        render(){
            const {type, text} = this.props;
            const btnClass = cn("alert", `alert-${type}`);
            return (
                <div className={btnClass} role="alert">{text}</div>
            )
        }
    }
export default Alert;
// END
