import BodyBackground from './assets/images/Battleship_Background_1920x1080.jpg'

const theme = {
  typography: {
    fontFamily: [
      '"Sigmar One"',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: 17
  },
  props: {
    MuiButton: {
      disableElevation: true
    }
  },
  palette: {
    type: 'dark',
    background: {
      paper: 'rgba(0, 0, 0, 0.6)'
    },
    primary: {
      main: '#00ffd1'
    },
    secondary: {
      main: '#ffbe00'
    },
    error: {
      main: '#f00'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `url(${BodyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }
      }
    },
    MuiButton: {
      root: {
        borderRadius: 35
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 20
      }
    }
  }
}

export default theme
