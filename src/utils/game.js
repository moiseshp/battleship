import { BOARD_COLS, BOARD_ROWS } from './constants'
import * as ship from './ship'

export const getBoardHeaders = () => ({
  rows: BOARD_ROWS,
  cols: BOARD_COLS
})

export const getBoardPositions = () => {
  return boardPositionList().map(position => ({
    status: '',
    position
  }))
}

export const getRandomShips = () => ship.getRandomShips(boardPositionList())

const boardPositionList = () => {
  const allPositions = (total, row) => {
    const positions = BOARD_COLS.map(col => row + col)
    return [...total, ...positions]
  }

  return BOARD_ROWS.reduce(allPositions, [])
}
