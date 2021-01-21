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

export default function PokemonPage() {
  const classes = useStyles();

  return (
    <Container
    style={{ minHeight: 'calc(100vh - 220px)' }}>
      <Box mt={5} className="d-flex justify-content-center">
        <Card className={classes.root}>
          <CardHeader
            avatar={(
              <Avatar aria-label="recipe" className={classes.avatar}>
                A
              </Avatar>
            )}
            title={'ABILITY NAME'}
          />
          <CardMedia
            className={classes.media}
            image={'https://www.nicepng.com/png/full/22-223802_grand-champion-icon.png'}
          />
          <CardContent>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary" component="p">
                An ability description will render here...
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
