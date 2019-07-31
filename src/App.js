import React, {Component} from 'react';
import logo from './logo.svg';
import Login from './Login';
import './App.css';
import whitelogo4 from'./images/whitelogo4.png'

class App extends Component {



  render (){
  return (
    <div className="App">
      <header className="App-header">
       <img src={whitelogo4} style={{height:'250px', width:'300px', margin:'30px'}}/>
       <Login/>
      </header>
    </div>
  );
}
}
export default App;
