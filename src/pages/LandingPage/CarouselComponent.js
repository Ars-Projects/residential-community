import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import {Flip, Slide, Roll} from 'react-reveal';

import positivity from "./positivity.jpg";
import amenities from "./amenities.jpg";
import openspace from "./openspace1.jpg";
import allAmenities from "./amenities.png"

const CarouselComponent = (props) =>
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imgPath: positivity
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imgPath: amenities
        },
        {
            name: "Random Name #3",
            description: "Most random thing you have ever seen!",
            imgPath: openspace
        },
        {
            name: "Random Name #4",
            description: "World Most random thing you have ever seen!",
            imgPath: allAmenities
        },
        {
            name: "Random Name #5",
            description: "Introduction to the World!",
            imgPath: openspace
        },
    ]

    return (
        <Carousel
            className="Example"
            autoPlay={false}
            animation="slide"
            indicators={true}
            timeout={1000}
            cycleNavigation={true}
            navButtonsAlwaysVisible={false}
            navButtonsAlwaysInvisible={false}
            next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
            prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
            onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            flexDirection: "column"
            
        }}>
        <div style={{display: 'flex', flexDirection:'column'}}>  
        <Flip left>
            <Typography
              variant="h3"
              //color="textSecondary"
              style={{ margin: 16, textAlign: 'center' }}
            >
              Our Motto
            </Typography>
          </Flip>
  
          <Roll right>
            <Typography
              variant="h5"
              component="div"
              color="textSecondary"
              style={{ margin: 16, textAlign: 'center' }}
            >
              Strive to make you feel home where we all belong, connect, share knowledge, encourage talent and be more together, everyday!
            </Typography>
          </Roll>
          </div>
            <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
                <CardContent style={{
                    color: "#fff",
                    background: `url(${props.item.imgPath})`
                }}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.item.name}
                    </Typography>
                    <CardMedia
                        style={{
                            height: 0,
                            paddingTop: '56.25%'
                        }}
                        image={props.item.imgPath}
                        title="Paella dish"
                    />
                    <Typography variant="body2" component="div">
                        {props.item.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CarouselComponent;
