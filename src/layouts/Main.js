import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat'
import { useStyles } from './Main.styles'

const items = [
  { name: 'Board', route: '/' },
  { name: 'Games', route: '/games' }
]

const Main = ({ children }) => {
  const location = useLocation()
  const isCurrentRoute = (route) => route === location.pathname
  const classes = useStyles()
  return (
    <Box className={classes.wrapper} p={3}>
      <Box className={classes.aside} textAlign="center">
        <Paper className={classes.sidebar}>
          <Box p={3}>
            <DirectionsBoatIcon fontSize="large" />
            <Box mb={3}>
              <Typography variant="h5" color="secondary">
                {process.env.REACT_APP_NAME}
              </Typography>
            </Box>
            {items.map(item => (
              <Box my={1.5} key={item.name}>
                <Button
                  component={Link}
                  to={item.route}
                  color="default"
                  variant={isCurrentRoute(item.route) ? 'contained' : 'outlined'}
                  size="large"
                  fullWidth
                >
                  {item.name}
                </Button>
              </Box>
            ))}
            <Box pt={2}>
              <Typography variant="caption">
                {process.env.REACT_APP_AUTHOR}
                <Box component="span" color="secondary.main"> &copy; </Box>
                {(new Date()).getFullYear()}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box className={classes.content}>
        {children}
      </Box>
    </Box>
  )
}

export default Main

Main.propTypes = {
  children: PropTypes.element.isRequired
}
