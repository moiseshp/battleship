import PropTypes from 'prop-types'
import { useRecoilValue } from 'recoil'
import { gameIsGameOverSelector } from '../../store/game/selectors'
import { Box, Paper } from '@material-ui/core'
import BoardCell from './BoardCell'
import BoardGameOver from './BoardGameOver'

const Board = ({ headers, children }) => {
  const boxWidth = 55
  const boardWidth = boxWidth * headers.cols.length
  const isGameOver = useRecoilValue(gameIsGameOverSelector)
  return (
    <Paper>
      {!isGameOver
        ? <Box display="flex" pt={2} pr={2}>
            <Box width={boxWidth}>
              {headers.rows.map(head => (
                <BoardCell key={head}>
                  {head}
                </BoardCell>)
              )}
            </Box>
            <Box>
              <Box display="flex" flexWrap="wrap" maxWidth={boardWidth}>
                {children}
              </Box>
              <Box display="flex">
                {headers.cols.map(head => (
                  <BoardCell key={head}>
                    {head}
                  </BoardCell>)
                )}
              </Box>
            </Box>
          </Box>
        : <BoardGameOver />
      }
    </Paper>
  )
}

export default Board

Board.propTypes = {
  children: PropTypes.node.isRequired,
  headers: PropTypes.object
}
