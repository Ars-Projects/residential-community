import React, { useEffect , useState} from 'react'
// import { useIntl } from 'react-intl'
// import { usePaths } from 'rmw-shell/lib/providers/Firebase/Paths'
import { useTheme } from '@material-ui/core/styles'
import { Line } from 'react-chartjs-2'
import Tabletop from "tabletop";
import _ from "lodash"
// import React, { useState, useEffect } from 'react';
import Chartist from "chartist";


const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() + 1
const monthsPath = `/user_registrations_per_month/${currentYear}`

// eslint-disable-next-line
const PeopleLineGraph =  () => {
  
  const [DailyData, setDailyData] = useState([]); 


  
  // const intl = useIntl()
  const theme = useTheme()
  // const { watchPath, getPath, unwatchPath } = usePaths()
  // const months = getPath(monthsPath, {})

  useEffect(() => {
    loadData();
    // watchPath(monthsPath)
    return () => {
      // unwatchPath(monthsPath)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadData = async ()=>{

    await Tabletop.init({ key: 'https://docs.google.com/spreadsheets/d/1-0fYmHDn-MY8IQmBM_4Z9zIVGTlSte61LTPvoCnyz8U/pubhtml',
                    simpleSheet: true 
                        }).then((data) => {
                          if(data){
                            data.forEach( covidRow => {
                                console.log(`Data per row is ${JSON.stringify(covidRow)}`)
                              })
                            }
   

                            let dailyData = _.chain(data)
                            // Group the elements of Array based on `color` property
                          .groupBy("UpdatedDate")
                          // `key` is group's name (color), `value` is the array of objects
                          .map((value, key) => ({ Updated_Date: key, total: _.sumBy(value, value => parseInt(value.TotalCases))
                            ,recovered: _.sumBy(value, value => parseInt(value.TotalPeopleRecovered)), 
                            active: _.sumBy(value, value => parseInt(value.ActiveCases))}))
                          .value();
                          setDailyData(dailyData);
                    }
                    )
                    .catch((err) => console.warn(err));;

  }


  let covidDaysLabels = []
  let covidDaysData = []
  let covidRecoveredData = []
  let covidActiveData = []
  let flag = 0;
  let sFlag = 0;
    if(DailyData){
      DailyData.forEach(day => {
        covidDaysLabels.push(day.Updated_Date)
        covidDaysData.push(day.total)
        covidRecoveredData.push(day.recovered)
        flag = day.active+sFlag;
        covidActiveData.push(flag)
        sFlag = flag;
      })
    }

  const monthsComponentData = {
    labels: covidDaysLabels,
    datasets: [
      {
        // label: intl.formatMessage({
          // id: 'user_registration_graph_label',
          // defaultMessage: 'Affected',
        // }),
        label: 'Affected',
        fill: false,
        maintainAspectRatio: true,
        lineTension: 0.1,
        backgroundColor: 'blue',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: theme.palette.primary.main,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: theme.palette.primary.main,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: covidDaysData,
      },{
        // label: intl.formatMessage({
          // id: 'user_registration_graph_label',
          // defaultMessage: 'Recovered',
        // }),
        label: 'Recovered',
        fill: false,
        maintainAspectRatio: true,
        lineTension: 0.1,
        backgroundColor: 'blue',
        borderColor: 'green',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: theme.palette.secondary.main,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: theme.palette.secondary.main,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: covidRecoveredData,
      },
      {
        // label: intl.formatMessage({
          // id: 'user_registration_graph_label',
          // defaultMessage: 'Active',
        // }),
        label: 'Active',
        fill: false,
        maintainAspectRatio: true,
        lineTension: 0.1,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: theme.palette.secondary.main,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: theme.palette.secondary.main,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: covidActiveData,
      }
    ],
  }

  return (
    <div>
      <Line
        options={{
          lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        }}
        data={monthsComponentData}
      />
    </div>
  )
}

export default PeopleLineGraph;