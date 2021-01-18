import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import PhotoCard from '../components/photo-card';

// TODO: Move ACCESS_TOKEN to .env module before production
const ACCESS_TOKEN = 'staCw-UZQJJApKS9QthfvDP6QIXYUmlQnfnkwgkKh8o';
const URL = `https://api.unsplash.com/photos/?per_page=12&client_id=${ACCESS_TOKEN}`;

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPhotos: [],
    };
  }

  async componentDidMount() {
    // TODO: Add a spinner here working while data are loading
    return fetch(URL)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ allPhotos: res });
          return console.log(this.state.allPhotos);
        },
        (err) => console.log(err),
      )
      .catch((err) => console.log(err));
  }

  renderPhotos() {
    return this.state.allPhotos.map((photo) => {
      const {
        urls,
        description,
        likes,
      } = photo;

      return (
        <Box
          mt={5}
          onClick={this.handleClickOpen}
        >
          <PhotoCard
            imageURL={urls.small}
            description={description}
            likes={likes}
          />
        </Box>
      );
    });
  }

  render() {
    return (
      <Container maxWidth="lg" className="d-flex flex-wrap justify-content-around">
        {this.renderPhotos()}
      </Container>
    );
  }
}
