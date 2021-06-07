import { BOARD_COLS, BOARD_ROWS } from './constants'
import * as ship from './ship'
import * as helpers from './helpers'

export const getBoardHeaders = () => ({
  rows: BOARD_ROWS,
  cols: BOARD_COLS
})

export const getPositions = () => {
  return getAllPositions().map(position => ({
    status: 'none',
    position
  }))
}

export const getAllPositions = () => {
  const allPositions = (total, row) => {
    const positions = BOARD_COLS.map(col => row + col)
    return [...total, ...positions]
  }
  return BOARD_ROWS.reduce(allPositions, [])
}

export const createGame = (data) => {
  return {
    ...data,
    id: helpers.getId(),
    date: new Date()
  }
}

export const getRandomShips = () => ship.getRandomShips(getAllPositions())
