import { Component } from 'react'

import CardList from './components/card-lists/card-list.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    console.log('constructor')
    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  // This life cycle run when the first time coponent reder on the page
  componentDidMount() {

    console.log('componentDidMount')

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

  onSearchChange = (event) => {
    const  searchField = event.target.value.toLowerCase();
    this.setState(()=> {
      return { searchField }
    });
  }

  render() {
    console.log('render')
    
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this

    const filterredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={ onSearchChange }/>
       {/* {
        filterredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{ monster.name }</h1>
            </div>
          );
        })
       } */}
       <CardList monsters={filterredMonsters}/>
      </div>
    );
  }
}

export default App;
