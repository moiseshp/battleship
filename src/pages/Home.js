import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { gameIsActiveState, gameShipsState, gamePositionsState } from '../store/game/atoms'
import { Box } from '@material-ui/core'
import Board from '../components/Board'
import BoardCell from '../components/Board/BoardCell'
import BoardItem from '../components/Board/BoardItem'
import Stats from '../components/Stats'
import Setting from '../components/Setting'
import { getBoardHeaders } from '../utils/game'
import { useSnackbar } from 'notistack'

const messages = {
  hit: 'Shot hit the ship!',
  downedShip: 'Success! Downed ship',
  error: 'Missed shot!'
}

const Home = () => {
  const headers = getBoardHeaders()
  const gameIsActive = useRecoilValue(gameIsActiveState)
  const [gamePositions, setGamePositions] = useRecoilState(gamePositionsState)
  const [gameShips, setGameShips] = useRecoilState(gameShipsState)
  const { enqueueSnackbar } = useSnackbar()

  const handleShot = (shot) => {
    const getShipByShot = gameShips.find(({ positions }) => positions.includes(shot))
    let status = 'error'
    if (getShipByShot) {
      status = 'success'
      const ships = gameShips.filter(({ id }) => id !== getShipByShot.id)
      const ship = {
        ...getShipByShot,
        hits: getShipByShot.hits + 1
      }
      setGameShips([...ships, ship])
      enqueueSnackbar(messages.hit, { variant: status })

      const isDownedShip = ship.size === ship.hits
      if (isDownedShip) enqueueSnackbar(messages.downedShip, { variant: status })
    } else {
      enqueueSnackbar(messages.error, { variant: status })
    }
    const positions = gamePositions.map(gamePosition => ({
      position: gamePosition.position,
      status: gamePosition.position === shot ? status : gamePosition.status
    }))

    setGamePositions(positions)
  }
  return (
    <Box display="flex">
      {gameIsActive
        ? <>
            <Box>
              <Board headers={headers}>
                {gamePositions.map(({ position, status }) => (
                  <BoardCell border key={position}>
                    <BoardItem
                      status={status}
                      onClick={() => handleShot(position)}
                    />
                  </BoardCell>
                ))}
              </Board>
            </Box>
            <Box ml={3}>
              <Stats />
            </Box>
          </>
        : <Setting />
      }
    </Box>
  )
}

export default Home
