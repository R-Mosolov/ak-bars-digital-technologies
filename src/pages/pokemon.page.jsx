import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 900,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

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

export default function PokemonPage({ name, imageURL, type, characteristics }) {
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
            action={(
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
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
              {console.log(characteristics)}
            </Box>
            <Box mt={2}>
              <Typography variant="h5" color="textSecondary" component="p">
                ABILITIES:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ...
              </Typography>
            </Box>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
