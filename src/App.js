import React from 'react';
import './App.css';
import Burger from './components/burger/burger'


class App extends React.Component{

  render(){
    return (
      <div className="burger-content">
        <Burger />
      </div>
    );
  }
}

export default App;
