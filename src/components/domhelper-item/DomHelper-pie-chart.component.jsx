import React, { useEffect, useState } from 'react'
// import { useIntl } from 'react-intl'
// import { usePaths } from 'rmw-shell/lib/providers/Firebase/Paths'
import { useTheme } from '@material-ui/core/styles'
import { Doughnut } from 'react-chartjs-2'
import Tabletop from "tabletop";
import _ from "lodash"
// const providerPath = '/provider_count'

const getProviderColor = (provider, defaultColor) => {
  switch (provider) {
    case 'Maid':
      return '#EA4335'
    case 'Driver':
      return '#90A4AE'
    case 'Cook':
      return '#36A2EB'
    
    default:
      return defaultColor
  }
}

// eslint-disable-next-line
const DomHelperPieChart =  () =>{
  // const intl = useIntl()
  const theme = useTheme()
  // const { watchPath, getPath, unwatchPath } = usePaths()
  const [DomHelpData, setDomHelpData] = useState([]);  
  // const providers = getPath(providerPath, {})

  useEffect(() => {
    loadData();
    // watchPath(providerPath)
    return () => {
      // unwatchPath(providerPath)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const loadData = async ()=>{
    
    await Tabletop.init({ key: 'https://docs.google.com/spreadsheets/d/1hp_VsHYLFl0kKkd6zLgp9tk-_ZhHIKUMKfCHfr729Vs/pubhtml?gid=785235367&single=true',
                    simpleSheet: true 
                        }).then((data) => {
                          if(data){
                            data.forEach( covidRow => {
                                console.log(`Data per row in Providers is ${JSON.stringify(covidRow)}`)
                              })
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

    // console.log(`data outside is ${covidData}`)
  }

  // let daysLabels = []
  // let daysData = []

  // if (days) {
  //   Object.keys(days)
  //     .sort()
  //     .map((key) => {
  //       daysLabels.push(key)
  //       daysData.push(days[key])
  //       return key
  //     })
  // }
  let providersData = []
  let providersLabels = []
  let providersBackgrounColors = []

    if(DomHelpData){
      DomHelpData.forEach(data => {
        providersData.push(data.total)
        providersBackgrounColors.push(
          getProviderColor(data.Role, theme.palette.primary.main)
        );
        providersLabels.push(data.Role)
      })
    }


  // if (providers) {
  //   Object.keys(providers)
  //     .sort()
  //     .map((key) => {
  //       providersLabels.push(intl.formatMessage({ id: key }))
  //       providersBackgrounColors.push(
  //         getProviderColor(key, theme.palette.primary.main)
  //       )
  //       providersData.push(providers[key])
  //       return key
  //     })
  // }


  const providersComponentData = {
    labels: providersLabels,
    datasets: [
      {
        data: providersData,
        backgroundColor: providersBackgrounColors,
        hoverBackgroundColor: providersBackgrounColors,
      },
    ],
  }

  return (
    <div>
      <Doughnut data={providersComponentData} />
    </div>
  )
}

export default DomHelperPieChart