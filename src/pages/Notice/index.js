import React, { useEffect, useState } from 'react'
import Tabletop from "tabletop";
import {  
  CollectionItemContainer,
  CollectionItemsContainer,
  TableItemsContainer,
  BackgroundImage , 
  CollectionPageContainer,
AddButton} from './noticepage.styles';
import _ from "lodash"
import TableNotice from "../../components/table-item/table-notice"
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import { useIntl } from 'react-intl'
import Paper from '@material-ui/core/Paper'
import {Zoom, Fade, Roll, Slide} from 'react-reveal';


// import Page from 'material-ui-shell/lib/containers/Page/Page'

// import CollectionItem from './../../components/collection-item/collection-item.component';

import image from './notice.jpg';
import imageNotice from './notice2.jpg';
import imageAnnouncement from './notice-announcements.jpg';
import imageCovid from './Vaccine1.jpg';
import noticeContent from './noticecontent.jpg'


const NoticePage = () => { 
  const intl = useIntl()
  

  // const [DomHelpData, setDomHelpData] = useState([]);
  
let noticeInitData = [{slno:'1',Category:'',Title:'',ShortContent:'',Pdflink:''}]
const [NoticeData, setNoticeData] = useState([noticeInitData]); 
const [SelectNotice, setSelectNotice] = useState('Announcements'); 
const [SelectCategory, setSelectCategory] = useState([{Category:'Announcements'}]); 
const [top, setTop] = useState(null)

 

  useEffect(() => {
  loadData();
    return () => {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const loadData = async ()=>{


    await Tabletop.init({ key: 'https://docs.google.com/spreadsheets/d/1ihFYdGkFYKRexyZteVGL4GhhRNcqT0Dv_uS2KDOpU_Q/pubhtml',
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

  return (

    <Page
      pageTitle={intl.formatMessage({
        id: 'announcements',
        defaultMessage: 'Announcements',
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
                backgroundImage: `url(${imageNotice})`,
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
                      fontSize: 60,
                    }}
                  >
                    Announcements
                  </h3>
                  </Roll>

                  {/* <h4
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 25,
                      marginTop: -40,
                    }}
                  >
                    Welcome to Prestige Sunrise Park Blog 
                  </h4> */}
                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -300,

              }}
            >
              <Paper
                elevation={3}
                style={{
                  width: '100%',
                  maxWidth: '98%',
                  borderRadius: 15,
                  minHeight: 400,
                  background:`url(${noticeContent})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  // backgroundPosition: 'right',
                }}
              >
              {/* <CollectionPageContainer> */}
              {/* <BackgroundImage className='image' imageUrl={imageNotice} /> */}
                <div className='collection-preview'>
                  <Slide left>
                  <CollectionItemsContainer>
                    {SelectCategory.map(item => (
                        <div className='preview'>
                        <CollectionItemContainer>
                          <BackgroundImage className='image' imageUrl={imageAnnouncement} />
                          <AddButton onClick={() => setSelectNotice(item.Category)} inverted>
                            {item.Category}
                          </AddButton>
                        </CollectionItemContainer>
                      </div>
                      ))}
                  </CollectionItemsContainer>
                  </Slide>
                  <Slide right>
                  <TableItemsContainer>
                    <TableNotice noticeData = {NoticeData.filter((item) => {return item.Category === SelectNotice})}/>
                  </TableItemsContainer>
                  </Slide>
                </div>  
            {/* </CollectionPageContainer>   */}
              </Paper>
            </div>
          </div>
  </Scrollbar>
</Page>
  )};

export default NoticePage;