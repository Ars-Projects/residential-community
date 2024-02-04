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
 import Button from '@material-ui/core/Button';
import axios from 'axios';

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


const TableShipmentOrder = ({shipmentData}) => {
  console.log(`shipment table data is ${JSON.stringify(shipmentData)}`);
//   console.log(`row.totals.weight is ${JSON.stringify(shipmentData[0].totals.weight)}`)
  const classes = useStyles();
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const shipmentorderInitData = [
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
//   [
//         {
//             "id": "113",
//             "name": "Delhivery 20KG Reverse",
//             "freight_charges": 830,
//             "cod_charges": 0,
//             "total_charges": 830,
//             "edd": "14-12-2023",
//             "min_weight": 20000,
//             "chargeable_weight": 20000,
//             "reverse_qc": false,
//             "reverse ": true
//         },
//         {
//             "id": "66",
//             "name": "Amazon Shipping",
//             "freight_charges": 108,
//             "cod_charges": 30,
//             "total_charges": 138,
//             "edd": "14-12-2023",
//             "min_weight": 500,
//             "chargeable_weight": 1000,
//             "reverse_qc": false,
//             "reverse ": false
//         },
//         {
//             "id": "37",
//             "name": "Amazon Shipping 1 KG",
//             "freight_charges": 84.5,
//             "cod_charges": 26.5,
//             "total_charges": 111,
//             "edd": "14-12-2023",
//             "min_weight": 1000,
//             "chargeable_weight": 1000,
//             "reverse_qc": false,
//             "reverse ": false
//         }]
  const [shipmentorderData, setshipmentorderData] = React.useState(shipmentorderInitData); 
 

  React.useEffect(() => {
  loadData();
    return () => {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const loadData = async ()=>{

    const weight=parseInt(shipmentData?.totals?.weight ?? "1")*1000;
    console.log(`shipment zipcode is ${shipmentData.billingInfo}`);
    const body = {
        "origin" : "570023",
        "destination" : shipmentData.billingInfo.address.zipCode,
        "payment_type" : "prepaid",
        "weight" : weight.toString(),
        "length" : "10",
        "breadth" : "10",
        "height" : "10"
    };
    console.log(`the body is ${JSON.stringify(body)}`);
    const shipmentOrderDataList = await axios.post(
    "http://localhost:4000/getShippingClientLists",
    body
    );
    console.log(`shipmentOrderDataList.data is ${shipmentOrderDataList.data}`);
    setshipmentorderData(shipmentOrderDataList.data);

    }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const createShippingOrder = async (shippingClient, shipmentData) => {
    console.log(`inside createShippingOrder with data ${shippingClient.id} 
    and ${JSON.stringify(shipmentData.billingInfo)} and ${JSON.stringify(shipmentData.shipmentDetails)}`);
    const phoneLen = shipmentData.billingInfo.address.phone.length;
    const phone = shipmentData.billingInfo.address.phone.slice(phoneLen-10, phoneLen);

    const orderList = [
        ];
    shipmentData.lineItems.forEach( lineItem => {
        orderList.push({
            name: lineItem.name,
            qty: lineItem.quantity,
            price: lineItem.price,
            sku: lineItem.sku,
        })
    })    
    // Create the shipping order and update the wix order
    const shipmentOrderDataList = await axios.post(
    "http://localhost:4000/createShippingOrder",
    {
        "order_number": shipmentData.number,
        "payment_type": "prepaid",
        "order_amount": 1000,
        "consignee": {
            "name": `${shipmentData.buyerInfo.firstName} ${shipmentData.buyerInfo.lastName}`,
            "address": `${shipmentData.billingInfo.address.addressLine1}`,
            "address_2": "",
            "city": `${shipmentData.billingInfo.address.city}`,
            "state": `${shipmentData.billingInfo.address.subdivision}`,
            "pincode": `${shipmentData.billingInfo.address.zipCode}`,
            "phone": `${phone}`,
        },
        "pickup": {
            "warehouse_name": "warehouse 1",
            "name" : "grassroots organic farms",
            "address": "#94 , EWS 1st. Stage,",
            "address_2": "Kuvempunagara near mahadeshwara floor mill",
            "city": "Mysore",
            "state": "Haryana",
            "pincode": "570023",
            "phone": "9164468870"
        },
        "order_items": orderList,
        "courier_id": shippingClient.id
    }
    );
    // console.log(`shipmentOrderDataList is ${JSON.stringify(shipmentOrderDataList)}`);

    const result = shipmentOrderDataList.data;
    console.log(`result shipmentOrderDataList is ${JSON.stringify(result)}`);
    const updateWixOrder = await axios.post(
    `http://localhost:4000/updateShippingOrder?id=${shipmentData.id}`,
    {
        "fulfillment": {
            "lineItems": [{
                "index": 1,
                "quantity": 1
            }],

        },
        "trackingInfo": {
            "shippingProvider": result.data.courier_name,
            "trackingNumber" : result.data.shipment_id,
            "trackingLink": `https://ship.nimbuspost.com/shipping/tracking/${result.data.awb_number}`,
        },
    }
    );
    if(result?.status){
        alert(`Shipping Order is created for ${shipmentData.buyerInfo.firstName} ${shipmentData.buyerInfo.lastName}`);
        // Update the wix order with shipping fulfillment status
        
    } else {
        alert(`error is ${JSON.stringify(result.message)}`);
    }
  }
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>id</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>freight_charges</TableCell>
            <TableCell className={classes.tableHeaderCell}>cod_charges</TableCell>
            <TableCell className={classes.tableHeaderCell}>total_charges</TableCell>
            {/* <TableCell className={classes.tableHeaderCell}>Create Order</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {shipmentorderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell> <Typography className={classes.name}>{row.id}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{`${row.name}`}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{row.freight_charges}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{row.cod_charges}</Typography></TableCell>
              <TableCell> <Typography className={classes.name}>{row.total_charges}</Typography></TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.ShortContent}</Typography>
                </TableCell>
                <TableCell>
                {row.id?<Button variant="outlined" color="primary" size="small" 
                  onClick={async () => {
                    await createShippingOrder(row, shipmentData);
                  }}>
                    create shipment
                  </Button>: <Button variant="contained" disabled>
                    create shipment
                  </Button>}
                  
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[25, 50, 75, 100]}
            component="div"
            count={shipmentData.length}
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

export default TableShipmentOrder;