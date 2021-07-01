import { Button } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  gameIsActiveState,
  gameInfinityState,
  gameGamesState,
  gameMaxShotsNumberState
} from '../store/game/atoms'
import { gameStatsSelector } from '../store/game/selectors'
import { createGame } from '../utils/game'

const PlayAgainButton = () => {
  const setGameIsActive = useSetRecoilState(gameIsActiveState)
  const setMaxShotsNumber = useSetRecoilState(gameMaxShotsNumberState)
  const setGames = useSetRecoilState(gameGamesState)
  const stats = useRecoilValue(gameStatsSelector)
  const infinity = useRecoilValue(gameInfinityState)

  const handleClick = () => {
    setGameIsActive(false)
    setMaxShotsNumber(infinity)

    const game = createGame(stats)
    setGames(games => [...games, game])
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<ReplayIcon />}
      onClick={handleClick}
      fullWidth
    >
      Play again
    </Button>
  )
}

export default PlayAgainButton
