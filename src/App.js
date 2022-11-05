import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters : [
        {
          name:'Linda',
          id : '123'
        },
        {
          name:'Frank',
          id : '456'
        },
        {
          name:'Jacky',
          id : '789'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
       {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{ monster.name }</h1>
        })
       }
      </div>
    );
  }
}

export default App;
