import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
// import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import { gamePositionsState, gameIsActiveState } from '../store/game/atoms'
import { Box } from '@material-ui/core'
import Board from '../components/Board'
import BoardCell from '../components/Board/BoardCell'
import BoardItem from '../components/Board/BoardItem'
import Summary from '../components/Summary'
import Setting from '../components/Setting'
import { getBoardHeaders } from '../utils/game'

const Home = () => {
  const headers = getBoardHeaders()
  const gameIsActive = useRecoilValue(gameIsActiveState)
  const [gamePositions] = useRecoilState(gamePositionsState)

  const HandleAttempt = (position) => {
    console.info(position)
    // const newPositions = positions.map(item => {
    //   const status = item.position === position ? 'success' : item.status
    //   return { ...item, status }
    // })
    // setPositions(newPositions)
    // setPositionsOfTheShotsFired((positions) => [...positions, position])
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
                      onClick={() => HandleAttempt(position)}
                    />
                  </BoardCell>
                ))}
              </Board>
            </Box>
            <Box ml={3}>
              <Summary />
            </Box>
          </>
        : <Setting />
      }
    </Box>
  )
}

export default Home
