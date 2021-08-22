import React, { useState, lazy, Suspense } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Helmet } from 'react-helmet'
import { Scrollbars } from 'react-custom-scrollbars'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeProvider, createMuiTheme, responsiveFontSizes, withStyles , makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { useTheme as useAppTheme } from 'material-ui-shell/lib/providers/Theme'
import background from "../../gallery/08.jpg";
import background1 from "../../gallery/01.jpg";
import { Roll} from 'react-reveal';

const PageContent = lazy(() => import('./PageContent'))
const Footer = lazy(() => import('./Footer'))
const ResponsiveMenu = lazy(() =>
  import('rmw-shell/lib/containers/ResponsiveMenu')
)

let theme = createMuiTheme({
  palette: {
    primary: { main: '#242424' },
    secondary: {
      main: '#c62828',
    },
  },
})

theme = responsiveFontSizes(theme);




const useStyles = makeStyles({
  transitionGroup: {
    backgroundImage: `url(${background1})`,
    animation: "$slideDown 8s infinite alternate"
  },
  
  zoomIn: {
    animation: "$slideDown 8s"
  },

  "@keyframes slideDown": {
    from: {
      transform: 'scale(1,1)'
    },
    
    to: {
        transform: 'scale(1.1,1.1)'
    }
  }
});

const LandingPage = () => {
  const [scrollbar, setScrollbar] = useState(null)
  const [transparent, setTransparent] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [components, setComponents] = useState(null)
  const [top, setTop] = useState(null)
  const history = useHistory()
  const { isRTL } = useAppTheme()

  const scrollTo = (e) => {
    e &&
      e.scrollIntoView({
        behavior: 'smooth',
        alignToTop: true,
      })
  }

  const classes = useStyles();

  const sections = [
    {
      name: 'start',
      onClick: () => history.push('/dashboard'),
    },
    {
      name: 'about us',
      onClick: () => {
        setScrolled(true)
        setTimeout(() => {
          scrollTo(components)
        }, 500)
      },
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, minimal-ui"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.react-most-wanted.com" />
          <meta
            name="keywords"
            content={
              'react,pwa,material-ui,redux,boilerplate,lighthouse,gdg,react.js'
            }
          />
          <meta
            name="description"
            content={
              'React PWA boilerplate that is using create-react-app and firebase '
            }
          />

          <title>Prestige Sunrise Park</title>
        </Helmet>
        <Scrollbars
          ref={(e) => {
            if (e !== null) {
              setScrollbar(e)
            }
          }}
          renderView={props => (
            isRTL ? <div {...props} style={{
              ...props.style,
              marginLeft: props.style.marginRight,
              marginRight: 0, }} /> : <div {...props} style={{
                ...props.style,}} />
          )}
          onScroll={(e) => {
            setTransparent(scrollbar.viewScrollTop < 100)
            setScrolled(true)
          }}
          autoHide
          style={{ height: '100vh' }}
        > 
          <AppBar
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: transparent ? 'transparent' : undefined,
              boxShadow: transparent ? 'none' : undefined,
              transition: 'background 1s',
            }}
            position="static"
          >
            <Toolbar disableGutters>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  scrollTo(top)
                }}
              >
                <img
                  src={'/rmw.svg'}
                  alt="logo"
                  style={{
                    height: 35,
                    justifySelf: 'center',
                    color: 'white',
                    marginLeft: 12,
                    display: transparent ? 'none' : undefined,
                  }}
                />
              </div>
              <div style={{ flex: 1 }} />

              <Suspense fallback={<CircularProgress />}>
                <ResponsiveMenu sections={sections} />
              </Suspense>
            </Toolbar>
          </AppBar>
          <div style={{ width: '100%', height: '100%' }}>

            <div
              ref={(r) => r && setTop(r)}
              className={classes.transitionGroup}
              style={{
                backgroundColor: 'blue',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                
                alignItems: 'center',
              }}
            >

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                

                <Roll right>
                  <h3
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: '4vw',
                    }}
                  >
                    Prestige Sunrise Park
                  </h3>
                </Roll>

                <Roll left>
                  <h4
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: '2vw',
                      marginTop: -40,
                    }}
                  >
                    Welcome to Prestige Sunrise Park, a place we call “Home” 
                  </h4>
                </Roll>
              </div>
            </div>
            
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e6e6e6',

              }}
            >
              
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: -80,
                  }}
                >
                  <Button
                    size="large"
                    style={{
                      margin: 30,
                      borderRadius: '40px',
                      fontSize: 'bold',
                    }}
                    aria-label="Start button"
                    variant="contained"
                    color="secondary"
                    name={'signin'}
                    onClick={() => {
                      history.push('/dashboard')
                    }}
                  >
                    Start
                  </Button>
                </div>
                {scrolled && (
                  <Suspense fallback={<CircularProgress />}>
                    
                      <PageContent setComponents={setComponents} />
                    
                  </Suspense>
                )}
            </div>
            
            
            {scrolled && (
              <Suspense fallback={<CircularProgress />}>
                <Footer />
              </Suspense>
            )}
          </div>
        </Scrollbars>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default LandingPage
