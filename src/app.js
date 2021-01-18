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
import PhotoPage from './pages/photo.page';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/photo">
          <PhotoPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
