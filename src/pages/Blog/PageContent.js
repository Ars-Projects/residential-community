import React from 'react'
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  TrackChanges,
  FileCopy } from '@material-ui/icons';
import { useHistory } from 'react-router-dom'
import {
  Tooltip,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button } from '@material-ui/core'
import {
  withStyles,
  lighten,
  darken } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
// import positivity from "./positivity.jpg";
// import amenities from "./amenities.jpg";
// import openspace from "./openspace1.jpg";
// import allAmenities from "./amenities.png"
import CardMedia from '@material-ui/core/CardMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar as SwipweScroll, A11y } from 'swiper';
import blogIcon from './notice2.jpg'
import CardActionArea from '@material-ui/core/CardActionArea';
import {Zoom, Fade, Slide} from 'react-reveal';



import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, SwipweScroll, A11y]);

  const LightTooltip = withStyles((theme) => {
  const getBackgroundColor = theme.palette.type === 'light' ? lighten : darken;
  return {
tooltip: {
  ...theme.typography.body2,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  padding: '6px 10px',
  backgroundColor: getBackgroundColor(theme.palette.success.main, 0.1),
}
}})(Tooltip);


const PageContent = ({ item }) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      height:250,
    },
    media: {
      height: 100,
    },
  });

  const MediaCard = ({item}) => {
  const history = useHistory()
    const classes = useStyles();
    console.log('rendered props pagecontent is'+JSON.stringify(item))
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blogIcon}
            title={item.Title}
            onClick={ ()=> {history.push(`/blog/${item.slno}`);}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.ShortContent}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary" variant="contained" 
          // eslint-disable-next-line no-restricted-globals
          onClick={ ()=> {history.push(`/blog/${item.slno}`);}}>
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  }
  
try{
  return (
    <React.Fragment>
      <div style={{ height: 50 }} />
      <Slide top>
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        {item?item[0].Category:""}
      </Typography>
      </Slide>
      {/* <div
                  style={{
                    width: '100%',
                    // display: 'flex',
                    // justifyContent: 'center',
                    marginTop: 50,
                    
                  }}
                >

                  <h3
                    style={{
                      color: 'Orange',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 50,
                    }}
                  >
                    Health:
                  </h3>
                 </div> */}
                
                <div
                style={{
                  borderLeft: '10%',
                  width: '100%',
                  // display: 'flex',
                  // justifyContent: 'center',
                  // marginTop: 50,
                }}>
                  <Slide bottom>
                    <Swiper
                    // height={50}
                    spaceBetween={5}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    // effect="fade"
                  >
                    
                      
                        {item.map(blog => (
                          <SwiperSlide key={blog.slno}> 
                          <MediaCard item={blog}/> 
                            </SwiperSlide>
                          
                        ))} 
                    
                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide> */}
                    
                  </Swiper>
                  </Slide>
                </div>
      
      <div style={{ height: 30 }} />
      

      {/* <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Amenities offered
      </Typography>
     */}
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {/* <img src={allAmenities} alt="react" style={{ width: 750 }} /> */}
        {/* <img src="material-ui.png" alt="react" style={{ width: 150 }} />
        <img src="firebase.png" alt="react" style={{ width: 150 }} /> */}
      </div>
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
      }catch(error){
        return <h1>Caught an error.</h1>
      }
}

export default PageContent
