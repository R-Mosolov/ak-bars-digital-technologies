import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import PokemonCard from '../components/pokemon-card';
import Searcher from '../components/searcher';

const URL = 'https://pokeapi.co/api/v2/pokemon';

function getPokemonsImages() {
  let result = [];
  const MAX_POKEMONS_COUNT = 10; // TODO: Change it on 30 value according the test task

  for (let i = 1; i <= MAX_POKEMONS_COUNT; i++) {
    result.push(`https://pokeres.bastionbot.org/images/pokemon/${i}.png`);
  }

  return result;
}

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPhotos: [],
      pokemonsImages: [...getPokemonsImages()],
      pokemonsNames: [],
      areNames: false
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
  }

  renderPhotos() {
    return this.state.pokemonsImages.map((image, idx) => {
      return (
        <Box
          mt={5}
          onClick={this.handleClickOpen}
        >
          <PokemonCard
            imageURL={image}
            name={(this.state.areNames)
              ? this.state.pokemonsNames[idx].name.toUpperCase()
              : 'No name'
            }
            path={idx + 1}
          />
        </Box>
      );
    });
  }

  searchByName() {
    const searchQuery = document.getElementById('search-by-names').value.toString().toUpperCase();

    return alert(searchQuery);
  }

  render() {
    return (
      <Container maxWidth="lg">
        <div className="d-flex justify-content-end mt-4">
          <Searcher testProp={() => {}} />
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          {this.renderPhotos()}
        </div>
      </Container>
    );
  }
}
