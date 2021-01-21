import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PokemonCard({ name, imageURL, path }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ width: '300px' }}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.charAt(0)}
          </Avatar>
        )}
        title={name}
      />
      <Link to={`/pokemons/${path}`}>
        <CardMedia
          className={classes.media}
          image={imageURL}
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </Card>
  );
}
