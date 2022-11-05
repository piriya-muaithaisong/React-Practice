import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters : [],
      tests:{tests:'1234'}
    };
  }

  // This life cycle run when the first time coponent reder on the page
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        ()=>{
          return {monsters: users}
        },
        () => {
          console.log(this.state)
        }
      ))
  }

  render() {
    return (
      <div className="App">
       {
        this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{ monster.name }</h1>
            </div>
          );
        })
       }
      </div>
    );
  }
}

export default App;
