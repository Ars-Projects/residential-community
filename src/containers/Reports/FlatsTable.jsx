// import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    table: {
    },
    tableContainer: {},
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    actions : {
      display: 'flex'
    }
  }));

// let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
// for(let i=0;i<14;i++) {
//     USERS[i] = {
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         phone: faker.phone.phoneNumber(),
//         jobTitle: faker.name.jobTitle(),
//         company: faker.company.companyName(),
//         joinDate: faker.date.past().toLocaleDateString('en-US'),
//         status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
//     }
// }

export default function ({flatTableData}) {
    console.log(`flats table data is ${JSON.stringify(flatTableData)}`)
  const classes = useStyles();
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Sl no</TableCell>
            <TableCell className={classes.tableHeaderCell}>Updated Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Flat Number</TableCell>
            <TableCell className={classes.tableHeaderCell}>From Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>End Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Home Quarentine (people)</TableCell>
            <TableCell className={classes.tableHeaderCell}>Covid Positive (Flat)</TableCell>
            <TableCell className={classes.tableHeaderCell}>Preventive Isolation(People)</TableCell>
            <TableCell className={classes.tableHeaderCell}>Total Flats</TableCell>
            <TableCell className={classes.tableHeaderCell}>Total Cases</TableCell>
            <TableCell className={classes.tableHeaderCell}>Active Cases</TableCell>
            <TableCell className={classes.tableHeaderCell}>Total People Recovered</TableCell>
            <TableCell className={classes.tableHeaderCell}>Recovered Flats</TableCell>
            <TableCell className={classes.tableHeaderCell}>Active Flats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flatTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.slno}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={1}>
                          <Avatar alt={row.slno} src='.' className={classes.avatar}/>
                      </Grid>
                  </Grid>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.UpdatedDate}</Typography>
                </TableCell>
              <TableCell> <Typography className={classes.name}>{row.FlatNumber}</Typography></TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.FromDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.EndDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.HomeQuarentinePeople}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.CovidPositiveFlat}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.PreventiveIsolationPeople}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.PreventiveIsolationFlat}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.TotalFlats}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.TotalCases}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.ActiveCases}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.RecoveredFlats}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.ActiveFlats}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      
    </TableContainer>
    <TableFooter>
      <TableRow>
        <TablePagination
            classes={{
              actions: classes.actions
            }}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={flatTableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableRow>
    </TableFooter>

    </React.Fragment>
  );
}

// export default MTable;