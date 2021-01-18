import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
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

export default function PhotoCard(props) {
  const {
    name,
    description,
    imageURL,
    likes,
  } = props;

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
      {/* TODO: Move unique data about a photo here */}
      <Link to="/photo">
        <CardMedia
          className={classes.media}
          image={imageURL}
          title="Paella dish"
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </Card>
  );
}
