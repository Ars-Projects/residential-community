import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, quarantine, domesticHelpersData, lastUpdate } }) => {
    
    console.log(`the confirmed is${JSON.stringify(confirmed)} recovered is ${JSON.stringify(recovered)}`)
    if (!confirmed) {
      return 'Loading...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="red" gutterBottom>
                        Infected
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                        </Typography>
                        {/* <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography> */}
                        {/* <Typography variant="body2" component="p">
                        Number of active cases of COVID-19.
                        </Typography> */}
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="green" gutterBottom>
                        Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                        </Typography>
                        {/* <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography> */}
                        {/* <Typography variant="body2" component="p">
                        Number of recoveries from COVID-19.
                        </Typography> */}
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.precaution)}>
                    <CardContent>
                        <Typography color="green" gutterBottom>
                        Precautionary Quarantine
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={quarantine.value} duration={2.75} separator="," />
                        </Typography>
                        {/* <Typography color="green">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>  */}
                        {/* <Typography variant="body2" component="p">
                        Precautionary Quarantine caused by COVID-19.
                        </Typography> */}
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.maid)}>
                    <CardContent>
                        <Typography color="green" gutterBottom>
                        Blocked Maids/Cooks
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={domesticHelpersData.value} duration={2.75} separator="," />
                        </Typography>
                        {/* <Typography color="green">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>  */}
                        {/* <Typography variant="body2" component="p">
                        Blocked Maids/Cooks due to COVID-19.
                        </Typography> */}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Info;
