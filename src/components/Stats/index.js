import { useRecoilValue } from 'recoil'
import { gameStatsSelector } from '../../store/game/selectors'
import { Box, Paper, Typography } from '@material-ui/core'
import Indicator from './Indicator'

const Stats = () => {
  const {
    maxShotsNumber,
    numberOfShotsPlayed,
    hits,
    downedShipsNumber
  } = useRecoilValue(gameStatsSelector)
  return (
    <Paper>
      <Box p={3}>
        <Typography variant="h6" color="primary">Stats</Typography>
        <Indicator text={maxShotsNumber} description="Shots allowed" />
        <Indicator text={numberOfShotsPlayed} description="Shots played" />
        <Indicator text={hits} description="Hits" />
        <Indicator text={downedShipsNumber} description="Downed Ships" />
      </Box>
    </Paper>
  )
}

export default Stats
