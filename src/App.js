import React, {Component} from 'react';
import logo from './logo.svg';
import Login from './Login';
import './App.css';
import AquivaLogo from'./images/AqivahLogo.png'

class App extends Component {



  render (){
  return (
    <div className="App">
      <header className="App-header">
       <div className="AqivahLogo"><img src={AquivaLogo} /></div>
       <Login/>
      </header>
    </div>
  );
}
}
export default App;
