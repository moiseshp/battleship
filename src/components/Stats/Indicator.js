import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const Indicator = ({ text, description }) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        color="secondary"
      >
        {text}
      </Typography>
      <Box mt={-3}>
        <Typography variant="caption">{description}</Typography>
      </Box>
    </>
  )
}

export default Indicator

Indicator.propTypes = {
  text: PropTypes.any,
  description: PropTypes.string
}
