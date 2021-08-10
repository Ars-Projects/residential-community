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
import Paper from '@material-ui/core/Paper'
import positivity from "./positivity.jpg";
import amenities from "./amenities.jpg";
import openspace from "./openspace1.jpg";
import allAmenities from "./amenities.png"
import CardMedia from '@material-ui/core/CardMedia';
import {Flip, Slide, Roll} from 'react-reveal';
import cardBg from "./Aboutus1.jpg";
import CarouselComponent from './CarouselComponent';
import SingleLineImageList from './ImageList.jsx';


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

      <Paper
        elevation={3}
        style={{
          width: '100%',
          margin: '2% 0',
          maxWidth: '90%',
          borderRadius: 15,
          minHeight: '60vh',
          background:`url(${cardBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
      
        <CarouselComponent />
        
      </Paper>

      <Paper
        elevation={3}
        style={{
          width: '100%',
          margin: '2% 0',
          maxWidth: '90%',
          borderRadius: 15,
          minHeight: '60vh',
          background:`url(${cardBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Flip right>
          <Typography
            variant="h3"
            //color="textSecondary"
            style={{ margin: 16, textAlign: 'center' }}
          >
            We offer
          </Typography>
        </Flip>
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

      </Paper>

      
      <Paper
        elevation={3}
        style={{
          width: '100%',
          margin: '2% 0',
          maxWidth: '90%',
          borderRadius: 15,
          minHeight: '60vh',
          background:`url(${cardBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
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

          <Slide bottom>
            <Typography
              variant="h3"
              //color="textSecondary"
              style={{ margin: 16, textAlign: 'center', color: 'black' }}
            >
              About Us
            </Typography>
          </Slide>

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

        </div>

      </Paper>
      
      <Paper
        elevation={3}
        style={{
          width: '100%',
          margin: '2% 0',
          maxWidth: '90%',
          borderRadius: 15,
          minHeight: '60vh',
          background:`url(${cardBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        

        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center' }}
        >
          Gallery
        </Typography>
        <SingleLineImageList />
      </Paper>
      
      <Paper
        elevation={3}
        style={{
          width: '100%',
          margin: '2% 0',
          maxWidth: '90%',
          borderRadius: 15,
          minHeight: '60vh',
          background:`url(${cardBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        

        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center' }}
        >
          Amenities offered
        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <img src={allAmenities} alt="react" style={{ height: '90%' }} />
        </div>
      </Paper>
      
      

    </React.Fragment>
  )
}

export default PageContent;
