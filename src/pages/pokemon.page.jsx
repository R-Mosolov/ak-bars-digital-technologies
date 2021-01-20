import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 900,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ListItemLink = (props) => <ListItem button component="a" {...props} />;

const extractCharacteristics = (characteristics) => {
  return ([
      ...characteristics.map((characteristic, idx) => {
        return (
          <Typography variant="body2" color="textSecondary" component="p">
            {(characteristics.length > 1) ? '– ' : ''}
            {characteristic.description}
            {(idx === characteristics.length - 1) ? '.' : ';'}
          </Typography>
        );
    }),
  ]);
};

const extractAbilities = (abilities) => {
  return ([
      ...abilities.map((ability, idx) => {
        return (
          <Link
            to="/abilities/1"
            style={{ textDecoration: 'none' }}
          >
            <ListItemLink>
              <ListItemText
                primary={
                  `${(abilities.length > 1) ? '– ' : ''}`
                  + `${ability.name}`
                  + `${(idx === abilities.length - 1) ? '.' : ';'}`
                }
                style={{ color: 'rgba(0, 0, 0, 0.60)' }}
              />
            </ListItemLink>
          </Link>
        );
    }),
  ]);
};

export default function PokemonPage({ name, imageURL, type, characteristics, abilities }) {
  const classes = useStyles();

  return (
    <Container>
      <Box mt={5} className="d-flex justify-content-center">
        <Card className={classes.root}>
          <CardHeader
            avatar={(
              <Avatar aria-label="recipe" className={classes.avatar}>
                {name.charAt(0).toUpperCase()}
              </Avatar>
            )}
            title={name.toUpperCase()}
          />
          <CardMedia
            className={classes.media}
            image={imageURL}
          />
          <CardContent>
            <Box mt={2}>
              <Typography variant="h5" color="textSecondary" component="p">
                TYPE:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {type.toUpperCase()}
                .
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5" color="textSecondary" component="p">
                CHARACTERISTICS:
              </Typography>
              {extractCharacteristics(characteristics)}
            </Box>
            <Box mt={2}>
              <Typography variant="h5" color="textSecondary" component="p">
                ABILITIES:
              </Typography>
              {extractAbilities(abilities)}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
