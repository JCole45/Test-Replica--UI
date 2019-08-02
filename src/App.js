import React, {Component} from 'react';
import logo from './logo.svg';
import Login from './Login';
import Home from './Home';
import Chat from './Chat'
import Fav from './Favourite'
import './App.css';

const pages=['Login', 'Home', 'Chat', 'Fav']
let a = <Login/>
let b = <Home/>
let c = <Chat/>
let d = <Fav/>

class App extends Component {
  constructor(props){
    super(props)
   this.state={
     page: ''
   }
  }

  render (){
  return (
    <div className="App">
    <button onClick={()=> this.setState({page: a})} style={{width:'80px', height:'40px'}}> Login </button>
    <button onClick={()=> this.setState({page: b})}style={{width:'80px', height:'40px'}}>Home</button>
    <button onClick={()=> this.setState({page: c})}style={{width:'80px', height:'40px'}}> Chat </button>
    <button onClick={()=> this.setState({page: d})}style={{width:'80px', height:'40px'}}> Favourites </button>

            <header className="App-header">
       {this.state.page}
      </header>
    </div>
  );
}
}

export default App;
