import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)

  constructor(props){
    super(props)
    this.state = {
      themes: [
        { id: 1, name: 'White', className: 'light' },
        { id: 2, name: 'Black', className: 'dark' },
        { id: 3, name: 'Blue', className: 'blue' },
      ],
      currentTheme: 'light',
    };
  }

  setTheme = (className) => {
    this.setState({ currentTheme: className });
  };

  render() {
    const { themes, currentTheme } = this.state;
    
    return (
      <ThemeContext.Provider
        value={{ themes, currentTheme, setTheme: this.setTheme }}
      >
        <Tabs>
            <Tab eventKey="home" title="Home">
              <Home/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Profile />
            </Tab>
        </Tabs>
        <ThemeSwitcher />
       </ThemeContext.Provider>
    );
  }
  // END
}

export default App;
