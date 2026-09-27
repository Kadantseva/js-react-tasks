import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
 
  constructor(props){
    super(props);
    this.state= {id: null}
  }
  
  setChecked = (id, name) => (e) => {
    e.preventDefault();
    this.setState({id: id})
    this.context.setTheme(name)
  }
  isChecked = (id) => {
    if (this.state.id == id){
      return true
    }
    return false
  }
  static contextType = ThemeContext;
  render() {
    const themes = this.context.themes;
    return (
      <ButtonGroup className="mb-2">
        {themes.map((theme)=>(
          <ToggleButton
          // id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={this.isChecked(theme.id)}
          value={theme.id}
          key={theme.id}
          onClick={this.setChecked(theme.id, theme.className)}
        >
          {theme.name}
        </ToggleButton>))}
      </ButtonGroup>
    );
  }
  // END
}

export default ThemeSwitcher;
