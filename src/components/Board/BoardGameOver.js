import { useRecoilValue, useSetRecoilState } from 'recoil'
import { gameIsActiveState, gameInfinityState, gameMaxShotsNumberState } from '../../store/game/atoms'
import { Box, Button, Typography } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'

const BoardGameOver = () => {
  const setGameIsActive = useSetRecoilState(gameIsActiveState)
  const setMaxShotsNumber = useSetRecoilState(gameMaxShotsNumberState)
  const infinity = useRecoilValue(gameInfinityState)
  const handleClick = () => {
    setGameIsActive(false)
    setMaxShotsNumber(infinity)
  }

  return (
    <Box p={6} textAlign="center">
      <Box mb={3}>
        <Typography variant="h4" color="error">Game Over!</Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ReplayIcon />}
        onClick={handleClick}
      >
        Try again
      </Button>
    </Box>
  )
}

export default BoardGameOver
