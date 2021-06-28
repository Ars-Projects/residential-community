/* eslint-disable import/no-anonymous-default-export */
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

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
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

export default function ({domTableData}) {
    console.log(`flats table data is ${JSON.stringify(domTableData)}`)
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
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Sl no</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Helper Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Role</TableCell>
            <TableCell className={classes.tableHeaderCell}>Start Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>End Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Blocked Status</TableCell>
            <TableCell className={classes.tableHeaderCell}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {domTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.slno}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={1}>
                          <Avatar alt={row.slno} src='.' className={classes.avatar}/>
                      </Grid>
                  </Grid>
              </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.Date}</Typography>
                </TableCell>
              <TableCell> <Typography className={classes.name}>{row.HelperName}</Typography></TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.Role}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.StartDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.EndDate}</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.BlockedStatus}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={domTableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

// export default MTable;