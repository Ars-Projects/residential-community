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
import axios from "axios";


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
// const [NoticeData, setNoticeData] = useState(noticeInitData); 
const [SelectNotice, setSelectNotice] = useState('Announcements'); 
const [SelectCategory, setSelectCategory] = useState([{Category:'Announcements'}]); 
const [top, setTop] = useState(null)

 

  // useEffect(() => {
  // loadData();
  //   return () => {
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  // const loadData = async ()=>{

  
  // const data = await axios.post(
  //   "http://localhost:4000/getWixOrders",{
  //     "query": {
  //             "filter": "[{\"dateCreated\": \"desc\"}]"
  //         }
  //   },
  //   {
  //     headers: {
  //       Authorization: `IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcImY3MjdlNDZhLWM0NDktNDcxNS05NjU2LWVhY2RkNjYxZjg3MVwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjNkMGM2YmFkLTQzODktNDJiYy1hM2RmLWQ0MmJjMWE4ZWE0NVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCIxNDg3NGE3YS1lZjAwLTRiYzctYWU4MC1hYTkwMmRhYTlhNWVcIn19IiwiaWF0IjoxNzAxODc3Mjk4fQ.BQYhDhMospDnZWnVZFy2_NU9WtJVn1_8uFfNyxvKQfZTkox14hI2OtcvSPk7mz_jnIgOAKWoJVksTsZKh8XwyY3jAaYuF7NmiDHQ-QyEacLzUOKc9YAayNyOyLQtnHV2cg1txV1bWQlffpp0ZtPNRzFyw9dyKarsIfigLs3MWNoL86uyc9NNiEvRBQEzVh1vnlLXDfzOzhoknutwUTp9GD6Uep_i9knr-HclmWLWrw4cZXawzPSywL-GYI1OaEx_7USvtexD2gcxAyTQRxmMuz_v9Vw1BnMFBngSDAQkHtB1UQfwJ0uXKQs-7-FtnCfHXrLnd2SjxcHlQHFYFI-19g`,
  //       'wix-site-id': '89793f6a-425e-441a-96b3-09aef0ea4125',
  //       'wix-account-id': '14874a7a-ef00-4bc7-ae80-aa902daa9a5e',
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // )
  //   console.log(`data fetched from orders ${data.data}`);
  //   setNoticeData(data.data);

  //   }

  return (

    <Page
      pageTitle={intl.formatMessage({
        id: 'Orders',
        defaultMessage: 'Orders',
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
                    Orders
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
                  {/* <Slide left>
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
                  <Slide right> */}
                  <TableItemsContainer>
                    <TableNotice />
                  </TableItemsContainer>
                  {/* </Slide> */}
                </div>  
            {/* </CollectionPageContainer>   */}
              </Paper>
            </div>
          </div>
  </Scrollbar>
</Page>
  )};

export default NoticePage;