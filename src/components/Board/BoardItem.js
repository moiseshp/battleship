import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import CloseIcon from '@material-ui/icons/Close'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat'
// import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong'
// import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles'
// import WhatshotIcon from '@material-ui/icons/Whatshot'
import { Button } from '@material-ui/core'

const ButtonItem = withStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: 'none',
    padding: 0,
    minWidth: 'auto',
    width: '100%',
    height: '100%',
    color: 'white',
    borderRadius: 0,
    fontSize: 35,
    // boxSizing: 'box-',
    '&:hover': {
      // backgroundColor: '#F00',
      // borderColor: '#0062cc',
      // boxShadow: 'none'
    },
    '&:active': {
      // boxShadow: 'none',
      // backgroundColor: '#0062cc'
      // borderColor: '#005cbf'
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  },
  '@keyframes zoom': {
    '0%': {
      opacity: 0,
      margin: 0
    },
    '50%': {
      opacity: 1,
      margin: -5
    },
    '100%': {
      opacity: 0,
      margin: 0
    }
  },
  text: {
    '&:hover': {
      color: theme.palette.error.main,
      position: 'relative',
      zIndex: 0,
      '&:after': {
        backgroundColor: 'rgba(255, 0, 0, .3)',
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        animation: '$zoom 0.75s infinite',
        borderRadius: 45,
        boxShadow: '0 0 0 8px rgba(255, 0, 0, .3)',
        zIndex: -1
      }
    }
  },
  textSecondary: {
    '&:disabled': {
      color: theme.palette.error.main
    }
  },
  textPrimary: {
    '&:disabled': {
      color: theme.palette.primary.main
    }
  },
  containedPrimary: {
    // borderColor: '#0F3',
    // backgroundColor: '#0F0'
  }
}))(Button)

const options = [
  { status: 'error', color: 'primary', icon: <CloseIcon fontSize="inherit" /> },
  { status: 'success', color: 'secondary', icon: <DirectionsBoatIcon fontSize="inherit" /> }
]
const BoardItem = ({ status, onClick }) => {
  const [showSight, setShowSight] = React.useState(false)
  const useOption = () => {
    const option = options.find(option => option.status === status)
    return option || { color: 'default' }
  }
  const option = useOption()
  const handleClick = (e) => {
    onClick(e)
  }
  return (
    <ButtonItem
      color={option.color}
      variant="text"
      onMouseEnter={() => setShowSight(true)}
      onMouseLeave={() => setShowSight(false)}
      onClick={handleClick}
      disabled={!!status}
    >
      {showSight && !status && <GpsFixedIcon fontSize="inherit" />}
      {status && option.icon }
    </ButtonItem>
  )
}

export default BoardItem

BoardItem.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.string
}
