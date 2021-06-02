import PropTypes from 'prop-types'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    box: ({ border }) => ({
      borderWidth: border ? 1 : undefined,
      borderStyle: border ? 'solid' : undefined,
      borderColor: theme.palette.primary.main,
      borderRadius: 8,
      width: 55,
      height: 55
    })
  })
)

const BoardCell = ({ border, children }) => {
  const classes = useStyles({ border })
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.box}
      color="primary.main"
    >
      {children}
    </Box>
  )
}

export default BoardCell

BoardCell.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool
}
