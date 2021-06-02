import { useRecoilValue } from 'recoil'
import { gameAttemptsPlayedNumberState, gameMaxAttemptsState } from '../../store/game/atoms'
import { Box, Paper, Typography } from '@material-ui/core'
import Indicator from './Indicator'

const Summary = () => {
  const maxAttempts = useRecoilValue(gameMaxAttemptsState)
  const attemptsPlayedNumber = useRecoilValue(gameAttemptsPlayedNumberState)
  return (
    <Paper>
      <Box p={3}>
        <Typography variant="h6">Summary</Typography>
        <Indicator text={maxAttempts} description="Shots allowed" />
        <Indicator text={attemptsPlayedNumber} description="Attempts" />
        <Indicator text={maxAttempts} description="Hits" />
        <Indicator text={maxAttempts} description="Downed Ships" />
      </Box>
    </Paper>
  )
}

export default Summary
