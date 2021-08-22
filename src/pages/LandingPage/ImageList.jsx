import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';


import _01 from '../../gallery/01.jpg';
import _02 from '../../gallery/02.jpg';
import _03 from '../../gallery/03.jpg';
import _04 from '../../gallery/04.jpg';
import _05 from '../../gallery/05.jpg';
import _06 from '../../gallery/06.jpg';
import _07 from '../../gallery/07.jpg';
import _08 from '../../gallery/08.jpg';

const tileData = [];

for (let i=0; i<9; i++) {
  let path = _01;
  switch (i%8) {
    case 1:
      path = _01
      break;
  
    case 2:
        path = _02
        break;

    case 3:
      path = _03
      break;

    case 4:
      path = _04
      break;

    case 5:
      path = _05
      break;
    
    case 6:
        path = _06
        break;

    case 7:
      path = _07
      break;
    
    default:
      path = _08
      break;
  }
  tileData.push({
    title: 'Image 01',
    img: path
  })
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '1%',
    color: theme.palette.primary,

  },
  gridList: {
    flexWrap: 'wrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(10)',
    color: theme.palette.primary,

  },
  title: {
    color: '#fff',

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      color: theme.palette.primary,
  },
  zoomIn: {
    '&:hover': {
      transform: 'scale(1.1)',
      overflow: 'hidden',
      transition: 'all 1.2s',
    },
  },

  
}));


export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.zoomIn}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className= {classes.title}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
