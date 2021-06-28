import React from 'react'
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  TrackChanges,
  FileCopy } from '@material-ui/icons';
import {
  Tooltip,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button } from '@material-ui/core'
import {
  withStyles,
  lighten,
  darken } from '@material-ui/core/styles'
import positivity from "./positivity.jpg";
import amenities from "./amenities.jpg";
import openspace from "./openspace1.jpg";
import allAmenities from "./amenities.png"
import CardMedia from '@material-ui/core/CardMedia';
import {Flip, Slide, Roll} from 'react-reveal';
import cardBg from "./Aboutus1.jpg"

  const LightTooltip = withStyles((theme) => {
  const getBackgroundColor = theme.palette.type === 'light' ? lighten : darken;
  return {
tooltip: {
  ...theme.typography.body2,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  padding: '6px 10px',
  backgroundColor: getBackgroundColor(theme.palette.success.main, 0.1),
}
}})(Tooltip);

const PackageCard = ({ title, command, description, icons, image }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
      <CardContent style={{
            color: "#fff",
            background: `url(${image})`,
            
          }}>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <CardMedia
        // className={classes.media}
        style={{
          height: 0,
          paddingTop: '56.25%', // 16:9
        }}
        image={image}
        title="Paella dish"
        />
        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F3F4F4',
            padding: 8,
          }}
        > */}
          {/* <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="h2"
          >
            {command}
          </Typography>
          {/* <Tooltip */}
          {/* <LightTooltip
            title={
            <Button
              color='inherit'
              startIcon={<CheckCircleOutlineIcon />}
            >
              Copied to clipboard!
            </Button>
            }
            placement="bottom"
            open={open}
            leaveDelay={1000}
            onClose={handleClose} > */} 
          {/* <IconButton
            aria-label="Icon button"
            onClick={() => {
              if (window.clipboardData) {
                // Internet Explorer
                window.clipboardData.setData('Text', command)
              } else {
                try {
                  navigator.clipboard.writeText(command)
                } catch (error) {}
              }
              handleClick()
            }}
          > */}
            {/* <FileCopy />
          </IconButton> */}
          {/* </LightTooltip> */}
        {/* </div> */}
        {/* <br />
        {icons}
        <br /> */}
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PageContent = ({ setComponents }) => {
  return (
    <React.Fragment>
      <div style={{ height: 10 }} />

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

      <Flip right>
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        We offer
      </Typography>
      </Flip>

      <div style={{ height: 10 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <Slide right>
        <PackageCard
          title={'Positive Environment'}
          command={'npx create-react-app my-app --template base'}
          description={
            'Positive and nurturing environment Warm, lively & caring neighborhood'
          }
          image={positivity}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        </Slide>
        <Slide bottom>
        <PackageCard
          title={'Green and Open Spaces'}
          command={'npx create-react-app my-app --template material-ui'}
          description={
            'Lush green open spaces Dedicated recreational areas for kids and elderly'
          }
          image={openspace}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        />
        </Slide>

        <Slide left>
        <PackageCard
          title={'Life enhancing amenities'}
          command={'npx create-react-app my-app --template rmw'}
          description={'Life enhancing amenities to make your stay enjoyable. Well-equipped for day-to-day grocery, grooming & health needs'}
          image={amenities}
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="react.png"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
              <img src="firebase.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        />
        </Slide>
      </div>
      <div style={{ height: 30 }} />
      <div
        ref={(r) => {
          if (r) {
            setComponents(r)
          }
        }}
        style={{
          //height: 400,
          backgroundColor: '#2D2D2D',
          backgroundImage: `url(${cardBg})`,
        }}
      >
        <div style={{ height: 30 }} />
        <Slide bottom>
        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center', color: 'black' }}
        >
          About Us
        </Typography>
        </Slide>
        {/* <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          But also not a framework.
        </Typography> */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TrackChanges style={{ fontSize: 150, color: 'white' }} />
        </div>
        <Flip left>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Designed for comfort thoughtfully and immaculately, located in Electronic City, Phase 1, Bangalore, Prestige Sunrise Park (PSP) offers a choice of tastefully designed apartments for you and your family. 
Prestige Sunrise Park is the location of 2 Blocks – Birchwood and Norwood, home to 1910 apartments of many stages, offering a simple and splendor lifestyle with ample space, natural lighting, and stunning finishes.
Through the environmental-friendly concepts of New Urbanism, PSP offers need a line or two on solar panels, WTP, smart lights in common areas and other such environment focused facilities

        </Typography>
        </Flip>
        <div style={{ height: 50 }} />
      </div>

      <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Amenities offered
      </Typography>
      {/* <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Every template is a collection of very carefully picked packages and
        projects. Only the creme de la creme of the react ecosystem
      </Typography> */}
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <img src={allAmenities} alt="react" style={{ width: 750 }} />
        {/* <img src="material-ui.png" alt="react" style={{ width: 150 }} />
        <img src="firebase.png" alt="react" style={{ width: 150 }} /> */}
      </div>
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
}

export default PageContent
