import { Box, Paper, Typography } from '@material-ui/core'

const NotFound = () => {
  return (
    <Paper>
      <Box p={3}>
      <Typography variant="h4">
        404 error page
      </Typography>
      </Box>
    </Paper>
  )
}

export default NotFound
