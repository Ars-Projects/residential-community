import React, { useEffect, useState, useCallback } from 'react'
import Page from 'material-ui-shell/lib/containers/Page'
import { useHistory, useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Publish from '@material-ui/icons/Publish'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Delete from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'

import { useIntl } from 'react-intl'
import Tabletop from "tabletop";
import _ from "lodash"
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Paper from '@material-ui/core/Paper'
import blogArticleImage from './blogArticle.jpg'
import {Zoom, Fade, Roll, Slide} from 'react-reveal';


import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 12,
  },
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  root: {
    width: '95%',
    maxWidth: 900,
    marginLeft:20,
    marginTop:30,
  },
});

const BlogArticle = () => {
  const history = useHistory()
  const { uid } = useParams()
  const intl = useIntl()

  const noticeInitialData = [{slno:'1',Category:'Announcements',Title:'abcd',ShortContent:'abcdef',Pdflink:''},
{slno:'2',Category:'',Title:'efg',ShortContent:'abcdef',Pdflink:''},
{slno:'3',Category:'',Title:'hij',ShortContent:'abcdef',Pdflink:''},
{slno:'4',Category:'',Title:'lmn',ShortContent:'abcdef',Pdflink:''},
{slno:'5',Category:'',Title:'opq',ShortContent:'abcdef',Pdflink:''}];
const noticeInitData = [{slno:'1',Category:'Announcements',Title:'abcd',ShortContent:'abcdef',Pdflink:''},
{slno:'2',Category:'Announcements',Title:'abcd',ShortContent:'abcdef',Pdflink:''}];

const [NoticeData, setNoticeData] = useState(noticeInitData);
const [SelectCategory, setSelectCategory] = useState([{Category:'Announcements'}]); 
const [top, setTop] = useState(null)


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

  let blogArticle = [{slno:'1',Category:'Announcements',Title:'abcd',ShortContent:'abcdef',Pdflink:''}];
  if(NoticeData){
    console.log(`uid is ${uid}`);
    blogArticle=NoticeData.filter( item => item.slno == uid)
    console.log(`Notice data is${JSON.stringify(NoticeData)} and blog article is ${blogArticle}`)
  }
  const classes = useStyles();

  try{
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
                backgroundImage: `url(https://homepages.cae.wisc.edu/~ece533/images/fruits.png)`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                minHeight: 200,
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
                      marginTop: -80
                    }}
                  >
                    PSP Blog
                  </h3>

                  </Roll>

                  <Roll left>
                  <h4
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 25,
                      marginTop: -70,
                    }}
                  >
                    {blogArticle[0].Title} 
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
                marginTop: -350,
              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: '100%',
                  maxWidth: '98%',
                  borderRadius: 15,
                  minHeight: 400,
                  background:`url(${blogArticleImage})`,
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover',                  
                }}
              >
                  <div className={classes.root}>
                  <ThemeProvider theme={theme}>
                    <Slide bottom>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P1}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P2}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P3}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P4}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P5}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P6}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P7}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P8}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P9}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P10}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P11}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P12}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P13}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P14}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P15}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P16}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P17}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {blogArticle[0].P18}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {blogArticle[0].P19}
                    </Typography>
                    </Slide>
                </ThemeProvider>
                </div>
              </Paper>
            </div>
          </div>
  </Scrollbar>
</Page>

  )}
  catch(error){
    return <h1>Caught an error.</h1>
  }
}

export default BlogArticle
