import { createStyles, makeStyles } from '@material-ui/core/styles'
const aside = 330

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: 'flex'
    },
    aside: {
      width: aside
    },
    sidebar: {
      position: 'sticky',
      top: theme.spacing(3)
    },
    content: {
      width: `calc(100% - ${aside}px)`,
      marginLeft: theme.spacing(3)
    }
  })
)
