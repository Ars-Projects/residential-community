import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DateRangePicker } from "materialui-daterange-picker";
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
import Button from '@material-ui/core/Button';
import Popup from 'components/controls/Popup';
import OrderForm from 'pages/Notice/orderForm';
import TableShipmentOrder from './table-shipment-order';
import SearchBar from "material-ui-search-bar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 950,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 1200
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


const TableNotice = () => {
  const noticeInitData = [
    {
        "id": "d2f8c589-8539-448c-bd3a-bc8d59079ed8",
        "number": 10001,
        "dateCreated": "2021-01-11T14:33:21.071Z",
        "buyerInfo": {
            "id": "6126ab46-bd0b-4715-bc7e-27c9c02c442b",
            "type": "CONTACT",
            "identityType": "CONTACT",
            "firstName": "Roopa vinayak",
            "lastName": "Naik",
            "phone": "09880180204",
            "email": "Rupa.vinu78@gmail.com",
            "contactId": "6126ab46-bd0b-4715-bc7e-27c9c02c442b"
        },
        "currency": "INR",
        "weightUnit": "KG",
        "totals": {
            "subtotal": "378.0",
            "shipping": "0.0",
            "tax": "0.0",
            "discount": "0.0",
            "total": "378.0",
            "weight": "1.029",
            "quantity": 1
        },
        "billingInfo": {
            "paymentMethod": "Razorpay",
            "externalTransactionId": "pay_GO2BJf1syMrqcl",
            "paymentProviderTransactionId": "pay_GO2BJf1syMrqcl",
            "paymentGatewayTransactionId": "a6b3a6e8-2750-4b32-a18e-2421c46db635",
            "address": {
                "fullName": {
                    "firstName": "Roopa vinayak",
                    "lastName": "Naik"
                },
                "country": "IN",
                "subdivision": "IN-KA",
                "city": "Bengaluru",
                "zipCode": "560073",
                "phone": "09880180204",
                "email": "Rupa.vinu78@gmail.com",
                "addressLine1": "\"swasti\"#212,beside prestige jindal city,buddajyoti layout,chikkabidarkallu."
            },
            "paidDate": "2021-01-11T14:34:03.934Z",
            "refundableByPaymentProvider": true
        },
        "shippingInfo": {
            "deliveryOption": "Free Shipping",
            "shippingRegion": "Domestic",
            "shipmentDetails": {
                "address": {
                    "fullName": {
                        "firstName": "Roopa vinayak",
                        "lastName": "Naik"
                    },
                    "country": "IN",
                    "subdivision": "IN-KA",
                    "city": "Bengaluru",
                    "zipCode": "560073",
                    "phone": "09880180204",
                    "email": "Rupa.vinu78@gmail.com",
                    "addressLine1": "\"swasti\"#212,beside prestige jindal city,buddajyoti layout,chikkabidarkallu."
                },
                "discount": "0.0",
                "tax": "0.0",
                "priceData": {
                    "taxIncludedInPrice": false,
                    "price": "0.0"
                }
            }
        },
        "read": true,
        "archived": false,
        "paymentStatus": "PAID",
        "fulfillmentStatus": "FULFILLED",
        "lineItems": [
            {
                "index": 1,
                "quantity": 1,
                "price": "378.0",
                "name": "Cold Pressed Sunflower oil",
                "translatedName": "Cold Pressed Sunflower oil",
                "productId": "cd59cd36-b6d2-2cf3-9d48-81793a7bdbbd",
                "totalPrice": "378.0",
                "lineItemType": "PHYSICAL",
                "options": [
                    {
                        "option": "Quantity",
                        "selection": "1000ml"
                    }
                ],
                "customTextFields": [],
                "weight": "1.029",
                "mediaItem": {
                    "mediaType": "IMAGE",
                    "url": "https://static.wixstatic.com/media/13ae88_ef4fb02a5e57444ebe57c65d83dc5e89~mv2.jpg/v1/fit/w_3000,h_3000,q_90/file.jpg",
                    "width": 3000,
                    "height": 3000,
                    "mediaId": "13ae88_ef4fb02a5e57444ebe57c65d83dc5e89~mv2.jpg",
                    "id": "13ae88_ef4fb02a5e57444ebe57c65d83dc5e89~mv2.jpg"
                },
                "sku": "0002",
                "discount": "0.0",
                "tax": "0.0",
                "taxIncludedInPrice": false,
                "priceData": {
                    "taxIncludedInPrice": false,
                    "price": "378.0",
                    "totalPrice": "378.0"
                },
                "refundedQuantity": 0
            }
        ],
        "activities": [
            {
                "type": "ORDER_PLACED",
                "timestamp": "2021-01-11T14:33:21.071Z"
            },
            {
                "type": "ORDER_PAID",
                "timestamp": "2021-01-11T14:34:03.934Z"
            },
            {
                "type": "INVOICE_WAS_SET",
                "timestamp": "2021-01-14T17:00:55.039Z"
            },
            {
                "type": "ORDER_FULFILLED",
                "timestamp": "2021-01-19T10:44:21.862Z"
            }
        ],
        "invoiceInfo": {
            "id": "7b4e4ef9-ced5-4c5f-a8db-57b29d388394",
            "source": "WIX"
        },
        "fulfillments": [],
        "cartId": "dc0b607e-dd49-4336-8fb8-19beaa54714b",
        "channelInfo": {
            "type": "WEB"
        },
        "enteredBy": {
            "id": "6126ab46-bd0b-4715-bc7e-27c9c02c442b",
            "identityType": "CONTACT"
        },
        "lastUpdated": "2021-01-19T10:44:21.862Z",
        "numericId": "10001",
        "refunds": [],
        "isInternalOrderCreate": false
    },
    {
        "id": "8f6195c6-d6a2-41d8-a7ba-f4ffe35519fa",
        "number": 10002,
        "dateCreated": "2021-01-11T16:10:16.631Z",
        "buyerInfo": {
            "id": "33540ecc-876b-4586-b3b9-609b0354a3ab",
            "type": "CONTACT",
            "identityType": "CONTACT",
            "firstName": "Kamalesh",
            "lastName": "M",
            "phone": "9164468870",
            "email": "kamal.mand@gmail.com",
            "contactId": "33540ecc-876b-4586-b3b9-609b0354a3ab"
        },
        "currency": "INR",
        "weightUnit": "KG",
        "totals": {
            "subtotal": "1100.0",
            "shipping": "0.0",
            "tax": "0.0",
            "discount": "0.0",
            "total": "1100.0",
            "weight": "1.43",
            "quantity": 1
        },
        "billingInfo": {
            "paymentMethod": "Razorpay",
            "externalTransactionId": "pay_GO3qMNzZWF8Vzl",
            "paymentProviderTransactionId": "pay_GO3qMNzZWF8Vzl",
            "paymentGatewayTransactionId": "18f90c61-5daf-44ad-b461-c135220556fb",
            "address": {
                "fullName": {
                    "firstName": "Kamalesh",
                    "lastName": "M"
                },
                "country": "IN",
                "subdivision": "IN-KA",
                "city": "Mandya",
                "zipCode": "570004",
                "phone": "9164468870",
                "email": "kamal.mand@gmail.com",
                "addressLine1": "Mandya, Karnataka, India"
            },
            "paidDate": "2021-01-11T16:11:29.154Z",
            "refundableByPaymentProvider": true
        },
        "shippingInfo": {
            "deliveryOption": "Free Shipping",
            "shippingRegion": "Domestic",
            "shipmentDetails": {
                "address": {
                    "fullName": {
                        "firstName": "Kamalesh",
                        "lastName": "M"
                    },
                    "country": "IN",
                    "subdivision": "IN-KA",
                    "city": "Mandya",
                    "zipCode": "570004",
                    "phone": "9164468870",
                    "email": "kamal.mand@gmail.com",
                    "addressLine1": "Mandya, Karnataka, India"
                },
                "discount": "0.0",
                "tax": "0.0",
                "priceData": {
                    "taxIncludedInPrice": false,
                    "price": "0.0"
                }
            }
        },
        "read": true,
        "archived": false,
        "paymentStatus": "PAID",
        "fulfillmentStatus": "FULFILLED",
        "lineItems": [
            {
                "index": 1,
                "quantity": 1,
                "price": "1100.0",
                "name": "Happy Hallikar Cow Ghee",
                "translatedName": "Happy Hallikar Cow Ghee",
                "productId": "df19c1f7-07d8-a265-42f8-e8dfa824cc6e",
                "totalPrice": "1100.0",
                "lineItemType": "PHYSICAL",
                "options": [
                    {
                        "option": "Weight",
                        "selection": "1000gm"
                    }
                ],
                "customTextFields": [],
                "weight": "1.43",
                "mediaItem": {
                    "mediaType": "IMAGE",
                    "url": "https://static.wixstatic.com/media/13ae88_0098585b42fd44aca6a242dca5aecc73~mv2.jpg/v1/fit/w_3000,h_3000,q_90/file.jpg",
                    "width": 3000,
                    "height": 3000,
                    "mediaId": "13ae88_0098585b42fd44aca6a242dca5aecc73~mv2.jpg",
                    "id": "13ae88_0098585b42fd44aca6a242dca5aecc73~mv2.jpg"
                },
                "sku": "0008",
                "discount": "0.0",
                "tax": "0.0",
                "taxIncludedInPrice": false,
                "priceData": {
                    "taxIncludedInPrice": false,
                    "price": "1100.0",
                    "totalPrice": "1100.0"
                },
                "refundedQuantity": 0
            }
        ],
        "activities": [
            {
                "type": "ORDER_PLACED",
                "timestamp": "2021-01-11T16:10:16.631Z"
            },
            {
                "type": "ORDER_PAID",
                "timestamp": "2021-01-11T16:11:29.154Z"
            },
            {
                "type": "ORDER_FULFILLED",
                "timestamp": "2021-01-19T10:44:52.419Z"
            }
        ],
        "fulfillments": [],
        "cartId": "f2a34b62-72d3-4c0f-b723-5caa9a2e29a4",
        "channelInfo": {
            "type": "WEB"
        },
        "enteredBy": {
            "id": "33540ecc-876b-4586-b3b9-609b0354a3ab",
            "identityType": "CONTACT"
        },
        "lastUpdated": "2021-01-19T10:44:52.419Z",
        "numericId": "10002",
        "refunds": [],
        "isInternalOrderCreate": false
    },]
const [NoticeData, setNoticeData] = React.useState(noticeInitData); 
  console.log(`order table data is ${JSON.stringify(NoticeData.length)}`);
  // console.log(`row.totals.weight is ${JSON.stringify(NoticeData[0].totals.weight)}`)
  const classes = useStyles();
  const [rows, setRows] = React.useState(NoticeData);
  const [page, setPage] = React.useState(0);
  const [openPopup, setOpenPopup] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [recordForEdit, setRecordForEdit] = React.useState(null)


  const [searched, setSearched] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  React.useEffect(() => {
  loadData();
    return () => {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const loadData = async ()=>{

  console.log(`dateRange is ${JSON.stringify(dateRange)}`);
  const data = await axios.post(
      "http://localhost:4000/getWixOrders",{
        "query": {
          "paging": {
              "limit": 100
          },
          "sort": "[{\"dateCreated\": \"desc\"}]"
        }
      },
      {
        headers: {
          Authorization: `IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcImY3MjdlNDZhLWM0NDktNDcxNS05NjU2LWVhY2RkNjYxZjg3MVwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjNkMGM2YmFkLTQzODktNDJiYy1hM2RmLWQ0MmJjMWE4ZWE0NVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCIxNDg3NGE3YS1lZjAwLTRiYzctYWU4MC1hYTkwMmRhYTlhNWVcIn19IiwiaWF0IjoxNzAxODc3Mjk4fQ.BQYhDhMospDnZWnVZFy2_NU9WtJVn1_8uFfNyxvKQfZTkox14hI2OtcvSPk7mz_jnIgOAKWoJVksTsZKh8XwyY3jAaYuF7NmiDHQ-QyEacLzUOKc9YAayNyOyLQtnHV2cg1txV1bWQlffpp0ZtPNRzFyw9dyKarsIfigLs3MWNoL86uyc9NNiEvRBQEzVh1vnlLXDfzOzhoknutwUTp9GD6Uep_i9knr-HclmWLWrw4cZXawzPSywL-GYI1OaEx_7USvtexD2gcxAyTQRxmMuz_v9Vw1BnMFBngSDAQkHtB1UQfwJ0uXKQs-7-FtnCfHXrLnd2SjxcHlQHFYFI-19g`,
          'wix-site-id': '89793f6a-425e-441a-96b3-09aef0ea4125',
          'wix-account-id': '14874a7a-ef00-4bc7-ae80-aa902daa9a5e',
          'Content-Type': 'application/json',
        },
      }
    )
    console.log(`data fetched from orders ${data.data}`);
    setNoticeData(data.data);

    }

  const requestSearch = (searchedVal) => {
    console.log(`searchedVal is ${searchedVal}`);
    const filtered = NoticeData.filter((row) => {
      return row?.buyerInfo?.firstName.toLowerCase().includes(searchedVal.toLowerCase()) 
      || row.billingInfo.address.addressLine1.toLowerCase().includes(searchedVal.toLowerCase()) || row.fulfillmentStatus.toLowerCase().includes(searchedVal.toLowerCase());
    });
    console.log(`filtered is ${filtered}`);
    setOpen(true);
    setRows(filtered);
  };

  const toggle = async () => {
    console.log(`fromTime is ${JSON.stringify(dateRange)} and toTime is ${JSON.stringify(dateRange)}`);
    const endTime = Number(new Date(dateRange.endDate));
    const startTime = Number(new Date(dateRange.startDate));
    const dateFilter = `{"$and": [{"lastUpdated":{"$lte": ${endTime}}}, {"lastUpdated":{"$gte": ${startTime}}}]}`;
    const body = {
      query: {
        paging: {
          limit: 100
        },
        filter: dateFilter,
        sort: "[{\"dateCreated\": \"desc\"}]"
      }
    }
    const data =  await axios.post(
    "http://localhost:4000/getWixOrders",
    body,
    // {
    // "query": {
    //     "paging": {
    //         "limit": 100
    //     },
    //     "filter": "{\"$and\": [{\"lastUpdated\":{\"$lte\": endTime}}, {\"lastUpdated\":{\"$gte\": startTime}}]}",
    //     "sort": "[{\"dateCreated\": \"desc\"}]"
    //     }
    // },
    {
      headers: {
        Authorization: `IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcImY3MjdlNDZhLWM0NDktNDcxNS05NjU2LWVhY2RkNjYxZjg3MVwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjNkMGM2YmFkLTQzODktNDJiYy1hM2RmLWQ0MmJjMWE4ZWE0NVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCIxNDg3NGE3YS1lZjAwLTRiYzctYWU4MC1hYTkwMmRhYTlhNWVcIn19IiwiaWF0IjoxNzAxODc3Mjk4fQ.BQYhDhMospDnZWnVZFy2_NU9WtJVn1_8uFfNyxvKQfZTkox14hI2OtcvSPk7mz_jnIgOAKWoJVksTsZKh8XwyY3jAaYuF7NmiDHQ-QyEacLzUOKc9YAayNyOyLQtnHV2cg1txV1bWQlffpp0ZtPNRzFyw9dyKarsIfigLs3MWNoL86uyc9NNiEvRBQEzVh1vnlLXDfzOzhoknutwUTp9GD6Uep_i9knr-HclmWLWrw4cZXawzPSywL-GYI1OaEx_7USvtexD2gcxAyTQRxmMuz_v9Vw1BnMFBngSDAQkHtB1UQfwJ0uXKQs-7-FtnCfHXrLnd2SjxcHlQHFYFI-19g`,
        'wix-site-id': '89793f6a-425e-441a-96b3-09aef0ea4125',
        'wix-account-id': '14874a7a-ef00-4bc7-ae80-aa902daa9a5e',
        'Content-Type': 'application/json',
      },
    }
  )
    console.log(`data fetched from toggled orders ${data.data}`);
    setNoticeData(data.data);
  setOpen(!open)
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const openInPopup = item => {
        setOpenPopup(true)
    }

  const addOrEdit = (employee, resetForm) => {
      if (employee.id == 0)
          // employeeService.insertEmployee(employee)
      // else
          // employeeService.updateEmployee(employee)
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
      // setRecords(employeeService.getAllEmployees())
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
        <>
      <Paper>
        
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <DateRangePicker
        open={open}
        toggle={toggle}
        onChange={(range) => setDateRange(range)}
      />
    <TableContainer component={Paper} className={classes.tableContainer}>
        
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Order_id</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Address</TableCell>
            <TableCell className={classes.tableHeaderCell}>Shipping Status</TableCell>
            {/* <TableCell className={classes.tableHeaderCell}>Create Order</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell> <Typography className={classes.name}>{row.id}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>
                {`${row?.buyerInfo?.firstName ?? ''}`}
                </Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{`${new Date(row.dateCreated).toLocaleString()}`}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{`${JSON.stringify(row.billingInfo.address.addressLine1)}`}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{ row.fulfillmentStatus }</Typography></TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.ShortContent}</Typography>
                </TableCell>
                <TableCell>
                {row.id?<Button variant="outlined" color="primary" size="small" 
                  onClick={() => { setOpenPopup(true); setRecordForEdit(row)}}>
                    create order
                  </Button>: <Button variant="contained" disabled>
                    create order
                  </Button>}
                  
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[25, 50, 75, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
      <Popup
                title="Order Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <TableShipmentOrder
                    shipmentData={recordForEdit}
                     />
            </Popup>
    </TableContainer>
    </Paper>
      <br />
      <a
        target="_blank"
        href="https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/"
      >
        Learn how to add search and filter to Material-UI Table here.
      </a>
    </>
  );
}

export default TableNotice;