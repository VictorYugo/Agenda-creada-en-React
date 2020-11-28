import React, {Component} from 'react';
import './App.css';
/*
//Components
import Header from './components/Header'
import Person from './components/Person'

function App() {
  return (
    <>
    <Header></Header>
    <Person name="Axe" age={27}></Person>
    <Person name="Victor" age={17}></Person>
    <Person name="Yesica" age={22}></Person>
    </>
  );
}*/

class App extends Component {

  state = {
    numero: 1
  }
  handleClick = () => {
    this.setState({
      numero: this.state.numero+1
    })
  }
  handleClickDecrement = () => {
    this.setState({
      numero: this.state.numero-1
    })
  }
  handleClickZero = () => {
    this.setState({
      numero: this.state.numero-this.state.numero
    })
  }

  render() {
    return (
      <div>
        <h1>Number: {this.state.numero} </h1>
        <button onClick={this.handleClick} >increment</button>
        <button onClick={this.handleClickDecrement}>decrement</button>
        <button onClick={this.handleClickZero}>Zero</button>
      </div>
    );
  }
}

export default App;
