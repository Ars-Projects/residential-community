import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const CovidCards = ({ data: { confirmed, recovered, quarantine, domesticHelpersData, lastUpdate } }) => {
    
    console.log(`the confirmed is${JSON.stringify(confirmed)} recovered is ${JSON.stringify(recovered)}`)
    if (!confirmed) {
      return 'Loading...';
    }
    return(
            <Grid container spacing={5} justify="center">
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="red" gutterBottom>
                        Infected
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                        </Typography>
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
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.precaution)}>
                    <CardContent>
                        <Typography color="green" gutterBottom>
                        Quarantine
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={quarantine.value} duration={2.75} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={2} component={Card} className={cx(styles.card, styles.maid)}>
                    <CardContent>
                        <Typography color="green" gutterBottom>
                        Blocked Maids
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp start={0} end={domesticHelpersData.value} duration={2.75} separator="," />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
    )
}

export default CovidCards;
