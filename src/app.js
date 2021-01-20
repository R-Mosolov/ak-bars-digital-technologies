import React from 'react';
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
const MAX_PAGES_COUNT = 10

for (let i = 1; i <= MAX_PAGES_COUNT; i++) {
  pagesPaths.push(i);
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {[
          ...pagesPaths.map((path) => {
            return (
              <Route path={`/pokemons/${path}`}>
                <PokemonPage imageURL={`https://pokeres.bastionbot.org/images/pokemon/${path}.png`} />
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
}

export default App;
