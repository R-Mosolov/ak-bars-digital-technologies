import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap';

import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/main.page';
import PokemonPage from './pages/pokemon.page';

// Create pages list
let pagesPaths = [];
let pokemonsTypes = [];
let pokemonsCharacteristics = [];
const MAX_PAGES_COUNT = 10

for (let i = 1; i <= MAX_PAGES_COUNT; i++) {
  pagesPaths.push(i);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonsNames: [],
      pokemonsTypes: [],
      pokemonsCharacteristics: [],

      areNames: false,
      areTypes: false,
      areCharacteristics: false,
    };
  }

  async componentDidMount() {
    // TODO: Add a spinner here working while data are loading
    
    // Get pokemons names
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((res) => this.setState({
        pokemonsNames: res.results,
        areNames: true,
      }))

    for (let i = 1; i <= MAX_PAGES_COUNT; i++) {
      
      // Get pokemons types
      fetch(`https://pokeapi.co/api/v2/type/${i}/`)
        .then((res) => res.json())
        .then((res) => {
          pokemonsTypes.push(res.name);
          return this.setState({
            pokemonsTypes: pokemonsTypes,
            areTypes: true,
          })
        });

      // Get pokemons characteristics
      fetch(`https://pokeapi.co/api/v2/characteristic/${i}/`)
        .then((res) => res.json())
        .then((res) => {
          pokemonsCharacteristics.push(res.descriptions);
          return this.setState({
            pokemonsCharacteristics: pokemonsCharacteristics,
            areCharacteristics: true,
          })
        });
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {[
            ...pagesPaths.map((path, idx) => {
              return (
                <Route path={`/pokemons/${path}`}>
                  <PokemonPage
                    imageURL={`https://pokeres.bastionbot.org/images/pokemon/${path}.png`}
                    name={(this.state.areNames) ? this.state.pokemonsNames[idx].name : "NO NAME"}
                    type={(this.state.areTypes) ? this.state.pokemonsTypes[idx] : "NO TYPE"}
                    characteristics={
                      (this.state.areCharacteristics)
                        ? this.state.pokemonsCharacteristics[idx]
                        : "NO CHARACTERISTICS"
                    }
                  />
                </Route>
              )
            })
          ]}
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  };
}

export default App;
