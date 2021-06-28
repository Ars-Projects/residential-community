import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'

// import CardContent from '@material-ui/core/CardContent'
// import CountUp from 'react-countup'
// import Days from '../../containers/Reports/Days'
// import Months from '../../containers/Reports/Months'
// import Cards from '../../containers/Reports/Cards'
import Page from 'material-ui-shell/lib/containers/Page/Page'
// import Providers from '../../containers/Reports/Providers'
import React, { useEffect, useState } from 'react'
import Tabletop from "tabletop";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
// import Typography from '@material-ui/core/Typography'
import { useIntl } from 'react-intl'
import { usePaths } from 'rmw-shell/lib/providers/Firebase/Paths'
// import { blue } from '@material-ui/core/colors'
import _ from "lodash"
import FlatsTable from '../../containers/Reports/FlatsTable'
import DomHelperTable from '../../containers/Reports/DomHelperTable'
import styles from './index.module.css';
import Grid from '@material-ui/core/Grid';

import { Covid19PageContainer, BackgroundImage, Covid19CardContainer, Covid19GraphContainer, Covid19TableContainer  } from './covid19page.styles';
import imageCovid from './Vaccine1.jpg';
import CovidCards from '../../components/covid-card/Cards'
// import Page from 'material-ui-shell/lib/containers/Page/Page'
import DomHelperPieChart from '../../components/domhelper-item/DomHelper-pie-chart.component'
// import DomHelperTable from '../../components/domhelper-item/DomHelperTable'
import FlatsLineGraph from '../../components/flats-item/Flats-line-graph.component'
import PeopleLineGraph from '../../components/flats-item/People-line-graph.component'

import AccessTime from "@material-ui/icons/AccessTime";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {Zoom, Fade, Roll, Slide} from 'react-reveal';

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
// import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// const ReportContainer = ({ children }) => {
//   return (
//     <div
//       style={{
//         minWidth: 300,
//         margin: 8,
//         flex: 0.45,
//         height: '100%',
//       }}
//     >
//       <Card>
//         <CardContent>{children}</CardContent>
//       </Card>
//     </div>
//   )
// }
const useStyles = makeStyles(styles);


const Dashboard = () => {
  const intl = useIntl()
  const { watchPath, getPath, unwatchPath } = usePaths()
  const users_count = getPath('users_count', 0)
  const [DailyData, setDailyData] = useState([]); 
  const [DomHelpData, setDomHelpData] = useState([]);
  let flatInitTableData = [{slno:'1',UpdatedDate:'',FlatNumber:'',FromDate:'',EndDate:'',HomeQuarentinePeople:'',
  CovidPositiveFlat:'',PreventiveIsolationPeople:'',PreventiveIsolationFlat:'',TotalFlats:'',TotalCases:'',
  ActiveCases:'',RecoveredFlats:'',ActiveFlats:''
}];
let domInitData = [{slno:'1',Date:'',HelperName:'',Role:'',StartDate:'',EndDate:'',BlockedStatus:''}]
  const [flatsTableData ,setFlatTableData]  = useState(flatInitTableData);
  const [domsTableData ,setDomTableData]  = useState(domInitData);

  
  let data = {
    confirmed:{value: 0}, recovered: {value: 0}, quarantine:{value: 0},domesticHelpersData: {value:0}, lastUpdate: '1/2/21'
  }

  useEffect(() => {
  loadData();
    watchPath('users_count');

    return () => {
      unwatchPath('users_count')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const loadData = async ()=>{
    // const response = await fetch(encodeURI('https://docs.google.com/spreadsheets/d/1-0fYmHDn-MY8IQmBM_4Z9zIVGTlSte61LTPvoCnyz8U/pubhtml'),{ method: 'Get' });
    // // const data = await response.json();
    // console.log(`the data is ${JSON.stringify(response)}`)
    let covidData = [];

    await Tabletop.init({ key: 'https://docs.google.com/spreadsheets/d/1-0fYmHDn-MY8IQmBM_4Z9zIVGTlSte61LTPvoCnyz8U/pubhtml',
                    simpleSheet: true 
                        }).then((data) => {
                          if(data){
                            data.forEach( covidRow => {
                                console.log(`Data per row  is ${JSON.stringify(covidRow)}`)
                              })
                            setFlatTableData(data);
                            }
                            // console.log( "Elements"+
                            //   _.chain(data)
                            //     // Group the elements of Array based on `color` property
                            //     .groupBy("Updated Date")
                            //     // `key` is group's name (color), `value` is the array of objects
                            //     .map((value, key) => ({ Updated_Date: key, users: value }))
                            //     .value()
                            // );  
                            let dailyData = _.chain(data)
                            // Group the elements of Array based on `color` property
                          .groupBy("UpdatedDate")
                          // `key` is group's name (color), `value` is the array of objects
                          .map((value, key) => ({ Updated_Date: key, total: _.sumBy(value, value => parseInt(value.TotalFlats))
                            ,recovered: _.sumBy(value, value => parseInt(value.RecoveredFlats)), 
                            active: _.sumBy(value, value => parseInt(value.ActiveFlats)),
                            precQData: _.sumBy(value, value => parseInt(value.PreventiveIsolationPeople))
                          }))
                          .value();
                            console.log(  "Total people affected"+
                              JSON.stringify(dailyData));
                              setDailyData(dailyData);
                            // console.log(_.map(_.countBy(data, "Updated Date"), (val, key) => ({ date: key, total: val })))
                            // setDailyData(_.map(_.countBy(data, "Updated Date"), (val, key) => ({ date: key, total: val })))
                            // let groupedResults = _.groupBy(results, (result) => moment(result['Date'], 'DD/MM/YYYY').startOf('isoWeek'));
                     
                    }
                    )
                    .catch((err) => console.warn(err));;

                    await Tabletop.init({ key: 'https://docs.google.com/spreadsheets/d/1hp_VsHYLFl0kKkd6zLgp9tk-_ZhHIKUMKfCHfr729Vs/pubhtml?gid=785235367&single=true',
                    simpleSheet: true 
                        }).then((data) => {
                          if(data){
                            data.forEach( covidRow => {
                                console.log(`Data per row in Providers is ${JSON.stringify(covidRow)}`)
                              })
                            setDomTableData(data);

                            }
                            // console.log( "Elements"+
                            //   _.chain(data)
                            //     // Group the elements of Array based on `color` property
                            //     .groupBy("Updated Date")
                            //     // `key` is group's name (color), `value` is the array of objects
                            //     .map((value, key) => ({ Updated_Date: key, users: value }))
                            //     .value()
                            // );  
                            let dailyData = _.map(_.countBy(data, "Role"), (val, key) => ({ Role: key, total: val }))
                            console.log(  "Total domestic helpers"+
                              JSON.stringify(dailyData));
                              setDomHelpData(dailyData);
                            // console.log(_.map(_.countBy(data, "Updated Date"), (val, key) => ({ date: key, total: val })))
                            // setDailyData(_.map(_.countBy(data, "Updated Date"), (val, key) => ({ date: key, total: val })))
                            // let groupedResults = _.groupBy(results, (result) => moment(result['Date'], 'DD/MM/YYYY').startOf('isoWeek'));
                     
                    }
                    )
                    .catch((err) => console.warn(err));;

  }
  
  let covidRecoveredData = 0
  let covidPrecQData = 0
  let covidAffectedData = 0;
  let covidDomesticHelpersData = 0;
  if(DailyData){
    DailyData.forEach(day => {
      covidAffectedData = covidAffectedData+day.total;
      covidRecoveredData = covidRecoveredData+day.recovered;
      covidPrecQData = covidPrecQData+day.precQData;
      
    })
  }
  if(DomHelpData){
    DomHelpData.forEach(data => {
      covidDomesticHelpersData = covidDomesticHelpersData+data.total;
    })
  }
  data.confirmed.value = covidAffectedData;
  data.recovered.value = covidRecoveredData;
  data.quarantine.value = covidPrecQData;
  data.domesticHelpersData.value = covidDomesticHelpersData;

  let flatTableData=[];
  if(flatsTableData){
    flatTableData = flatsTableData;
  }

  let domTableData=[];
  if(domsTableData){
    domTableData = domsTableData;
  }

  const classes = useStyles();

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: 'dashboard',
        defaultMessage: 'Covid-19 Dashboard',
      })}
    >
      <Scrollbar
        style={{
          width: '100%',
          height: '100%',
        }}
      >
      <Covid19PageContainer>
      {/* <Zoom top> */}
      <BackgroundImage className='image' imageUrl={imageCovid} />
      {/* </Zoom> */}

        {/* <Covid19CardContainer> */}
        {/* <div className={styles.container} src={imageCovid}> */}
        <Box m={4}>
      <Zoom bottom>
        <Grid container direction={'column'} spacing={24}>
          <CovidCards data={data}/>
        </Grid>
      </Zoom>
        </Box>
        {/* </div> */}
      {/* </Covid19CardContainer>
      <Covid19GraphContainer> */}
      <div>
      <Box m={4}>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Slide right>
                <Card chart>
                  <CardHeader color="success">
                    < PeopleLineGraph/>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>People Daily Infected, Recovered and Active cases</h4>
                  </CardBody>
                  <CardFooter chart>
                    <div className={classes.stats}>
                      <AccessTime /> updated 4 minutes ago
                    </div>
                  </CardFooter>
                </Card>
            </Slide>

          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Slide bottom>
              <Card chart>
                <CardHeader color="warning">
                  <FlatsLineGraph/>
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Flat Infection</h4>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 4 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Slide>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Slide left>

            <Card chart>
              <CardHeader color="info">
                {/* <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                /> */}
                <DomHelperPieChart/>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Domestic helpers Blocked</h4>
                {/* <p className={classes.cardCategory}>Last Campaign Performance</p> */}
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Slide>
          </GridItem>
      </GridContainer>
      </Box>
      <Box m={4}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Slide top>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Flats Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Flats and People Quarantine Data
                </p>
              </CardHeader>
              <CardBody>
                <FlatsTable flatTableData={flatTableData}/>
              </CardBody>
            </Card>
          </Slide>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <Slide bottom>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Domestic Helper Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Domestic Helpers blocked details 
                </p>
              </CardHeader>
              <CardBody>
                <DomHelperTable domTableData={domTableData}/>
              </CardBody>
            </Card>
          </Slide>
          </GridItem>
      </GridContainer>
      </Box>
      </div>
    </Covid19PageContainer> 
    </Scrollbar>
    </Page>
  )
}

export default Dashboard
