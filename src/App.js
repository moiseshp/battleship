import { RecoilRoot } from 'recoil'
import { SnackbarProvider } from 'notistack'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import LayoutMain from './layouts/Main'
import theme from './theme'
import * as pages from './pages'

const App = () => {
  const muiTheme = createMuiTheme({ ...theme })
  return (
    <RecoilRoot>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <SnackbarProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <LayoutMain>
              <Switch>
                <Route path="/games" component={pages.Games} />
                <Route path="/" component={pages.Home} exact />
                <Route component={pages.NotFound} />
              </Switch>
            </LayoutMain>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
