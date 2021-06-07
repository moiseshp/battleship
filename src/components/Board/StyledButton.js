import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

export default withStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: 'none',
    padding: 0,
    minWidth: 'auto',
    width: '100%',
    height: '100%',
    color: 'white',
    borderRadius: 0,
    fontSize: 35
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
  }
}))(Button)
