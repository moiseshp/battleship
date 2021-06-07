import { useHistory } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  gameIsActiveState,
  gameInfinityState,
  gameGamesState,
  gameMaxShotsNumberState
} from '../store/game/atoms'
import { gameStatsSelector } from '../store/game/selectors'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import { createGame } from '../utils/game'

const GameOverDialog = () => {
  const history = useHistory()
  const setGameIsActive = useSetRecoilState(gameIsActiveState)
  const setMaxShotsNumber = useSetRecoilState(gameMaxShotsNumberState)
  const setGames = useSetRecoilState(gameGamesState)
  const stats = useRecoilValue(gameStatsSelector)
  const infinity = useRecoilValue(gameInfinityState)

  const handleClick = (action) => {
    setGameIsActive(false)
    setMaxShotsNumber(infinity)

    const game = createGame(stats)
    setGames(games => [...games, game])
    if (action === 'toGoPage') history.push('/games')
  }

  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: { backgroundColor: '#000' }
      }}
    >
      <DialogTitle>
        <Box textAlign="center" px={4}>
          Game Over!
        </Box>
      </DialogTitle>
      <DialogContent>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ReplayIcon />}
          onClick={handleClick}
          fullWidth
        >
          Play again
        </Button>
        <Box my={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClick('toGoPage')}
            fullWidth
          >
            Game Stats
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default GameOverDialog
