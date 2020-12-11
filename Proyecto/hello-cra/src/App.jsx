import React, {Component} from 'react';
//import Form from './Components/Form'
import Refs from './components/Refs';
import Button from './components/Button/Button';
import Benviar from './components/Benviar/Benviar';

class App extends Component {
  render() {
    return (
      <div>
        <Refs></Refs>
        <Button></Button>
        <div>
          <Benviar></Benviar>
        </div>
      </div>
    );
  }
}

export default App;
