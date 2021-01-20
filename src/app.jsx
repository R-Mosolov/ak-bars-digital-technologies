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
const pagesPaths = [];
const pokemonsTypesContent = [];
const pokemonsCharacteristicsContent = [];
const pokemonsAbilitiesContent = [];
const MAX_PAGES_COUNT = 10;

for (let i = 1; i <= MAX_PAGES_COUNT; i += 1) {
  pagesPaths.push(i);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonsNames: [],
      pokemonsTypes: [],
      pokemonsCharacteristics: [],
      pokemonsAbilities: [],

      // TODO: Connect the lodash function instead Boolean operators
      areNames: false,
      areTypes: false,
      areCharacteristics: false,
      areAbilities: false,
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
      }));

    for (let i = 1; i <= MAX_PAGES_COUNT; i += 1) {
      // Get pokemons types
      fetch(`https://pokeapi.co/api/v2/type/${i}/`)
        .then((res) => res.json())
        .then((res) => {
          pokemonsTypesContent.push(res.name);
          return this.setState({
            pokemonsTypes: pokemonsTypesContent,
            areTypes: true,
          });
        });

      // Get pokemons characteristics
      fetch(`https://pokeapi.co/api/v2/characteristic/${i}/`)
        .then((res) => res.json())
        .then((res) => {
          pokemonsCharacteristicsContent.push(res.descriptions);
          return this.setState({
            pokemonsCharacteristics: pokemonsCharacteristicsContent,
            areCharacteristics: true,
          });
        });

      // Get pokemons abilities
      fetch(`https://pokeapi.co/api/v2/ability/${i}/`)
        .then((res) => res.json())
        .then((res) => {
          pokemonsAbilitiesContent.push(res.names);
          return this.setState({
            pokemonsAbilities: pokemonsAbilitiesContent,
            areAbilities: true,
          });
        });
    }
  }

  render() {
    const {
      pokemonsNames, pokemonsTypes, pokemonsCharacteristics, pokemonsAbilities,
      areNames, areTypes, areCharacteristics, areAbilities,
    } = this.state;

    return (
      <Router>
        <Header />
        <Switch>
          {[
            ...pagesPaths.map((path, idx) => (
              <Route
                key={Math.random() * 10000}
                path={`/pokemons/${path}`}
              >
                <PokemonPage
                  imageURL={`https://pokeres.bastionbot.org/images/pokemon/${path}.png`}
                  name={(areNames) ? pokemonsNames[idx].name : 'NO NAME'}
                  type={(areTypes) ? pokemonsTypes[idx] : 'NO TYPE'}
                  characteristics={
                    (areCharacteristics)
                      ? pokemonsCharacteristics[idx]
                      : 'NO CHARACTERISTICS'
                  }
                  abilities={
                    (areAbilities)
                      ? pokemonsAbilities[idx]
                      : 'NO ABILITIES'
                  }
                />
              </Route>
            )),
          ]}
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
