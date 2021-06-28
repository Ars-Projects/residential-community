import React, { useEffect, useState, Suspense, lazy } from 'react'
import Tabletop from "tabletop";
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import _ from "lodash"
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import { useIntl } from 'react-intl'
import Paper from '@material-ui/core/Paper'
import {CollectionBlogContainer} from './blogpage.styles'
import background from './blog.jpg'
// import swiperBg from './Abstract01.png'
import swiperBg from "./Aboutus.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar as SwipweScroll, A11y } from 'swiper';
import {Zoom, Fade, Roll} from 'react-reveal';


import blogIcon from './notice2.jpg'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// import CollectionItem from './../../components/collection-item/collection-item.component';
const PageContent = lazy(() => import('./PageContent'))

// install Swiper modules
SwiperCore.use([Navigation, Pagination, SwipweScroll, A11y]);

const BlogPage = () => { 
  const intl = useIntl()
  

  // const [DomHelpData, setDomHelpData] = useState([]);
  
const noticeInitialData = [{slno:'1',Category:'Health',Title:'abcd',ShortContent:'abcdef',Pdflink:''},
{slno:'2',Category:'',Title:'efg',ShortContent:'abcdef',Pdflink:''},
{slno:'3',Category:'',Title:'hij',ShortContent:'abcdef',Pdflink:''},
{slno:'4',Category:'',Title:'lmn',ShortContent:'abcdef',Pdflink:''},
{slno:'5',Category:'',Title:'opq',ShortContent:'abcdef',Pdflink:''}];
const noticeInitData = [{slno:'1',Category:'Announcements',Title:'abcd',ShortContent:'abcdef',Pdflink:''},
{slno:'2',Category:'Announcements',Title:'abcd',ShortContent:'abcdef',Pdflink:''}];

const [NoticeData, setNoticeData] = useState(noticeInitData); 
const [SelectNotice, setSelectNotice] = useState('Health'); 
const [SelectCategory, setSelectCategory] = useState([{Category:'Health'}]); 
const [top, setTop] = useState(null)
const [scrolled, setScrolled] = useState(false)
const [components, setComponents] = useState(null)
 

  useEffect(() => {

    const loadData = async ()=>{


      await Tabletop.init({ key: 'https://docs.google.com/spreadsheets/d/1GxzFL0XwueoCTodpR74_-fj23_nRy7OKSQAGK4fvLi0/pubhtml',
                      simpleSheet: true 
                          }).then((data) => {
                            if(data){
                              data.forEach( covidRow => {
                                  console.log(`Data per row  is ${JSON.stringify(covidRow)}`)
                                })
                                setNoticeData(data);
                              }

  
                              
                               let Category = _.chain(data)
                                  // Group the elements of Array based on `color` property
                                  .groupBy("Category")
                                  // `key` is group's name (color), `value` is the array of objects
                                  .map((value, key) => ({ Category: key}))
                                  .value()
                                  setSelectCategory(Category);
                              console.log(`category is ${JSON.stringify(Category)}`);  
                       
                      }
                      )
                      .catch((err) => console.warn(err));
    }
  
      loadData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const useStyles = makeStyles({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 100,
    },
  });
  
  const MediaCard = ({item}) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={blogIcon}
            title="Contemplative Reptile"
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
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    );
  }
  
  

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'blog',
        defaultMessage: 'Blog',
      })}
    >
      <Scrollbar
        style={{
          width: '100%',
          height: '100%',
        }}
      >
      <div style={{ width: '100%', height: '100%' }}>
            <div
              ref={(r) => r && setTop(r)}
              style={{
                height: '100vh',
                width: '100%',
                backgroundColor: 'blue',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                minHeight: 600,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div style={{ padding: 8 }}>
                <Roll right>
                  <h3
                    style={{
                      color: 'Orange',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 50,
                    }}
                  >
                    Blog
                  </h3>
                  </Roll>

                  <Roll left>

                  <h4
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 25,
                      marginTop: -40,
                    }}
                  >
                    Welcome to Prestige Sunrise Park Blog 
                  </h4>
                  </Roll>

                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -80,

              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: '100%',
                  maxWidth: '98%',
                  borderRadius: 15,
                  minHeight: 400,
                  background:`url(${swiperBg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'right',
                }}
              >
                

                 {
                    SelectCategory.map( category => (
                      <PageContent item ={NoticeData.filter((item) => {return item.Category === category.Category})}/>
                    ))}  
              </Paper>
            </div>
          </div>
  </Scrollbar>
</Page>
  )};

export default BlogPage;