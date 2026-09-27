import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
class MarkdownEdit extends React.Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.editor = new Editor({
            el: this.textInput.current,
            hideModeSwitch: true,
        });

        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            this.props.onContentChange(content);
        });
    }

    componentWillUnmount() {
        this.editor.destroy();
    }
    
    render(){
        return <div ref={this.textInput} />;
    }
}
export default MarkdownEdit;
// END
