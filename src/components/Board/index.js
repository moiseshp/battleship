import PropTypes from 'prop-types'
import { Box, Paper } from '@material-ui/core'
import BoardCell from './BoardCell'

const Board = ({ headers, children }) => {
  const boxWidth = 55
  const boardWidth = boxWidth * headers.cols.length
  return (
    <Paper>
      <Box display="flex" pt={2} pr={2}>
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
    </Paper>
  )
}

export default Board

Board.propTypes = {
  children: PropTypes.node.isRequired,
  headers: PropTypes.object
}
