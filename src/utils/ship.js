import * as helpers from './helpers'
import { BOARD_COLS, BOARD_ROWS, SHIPS } from './constants'

export const getRandomShips = (boardPositions) => {
  let positions = []
  const ships = SHIPS.map(({ size }, index) => {
    let position, ship
    let isValid = false
    while (!isValid) {
      position = helpers.getRandomItemFromList(boardPositions)
      const axes = position.split('')
      ship = getShip(axes, size)
      if (!ship.success) continue

      const positionExists = !!ship.positions.find(item => positions.includes(item))
      if (positionExists) continue
      positions = [...positions, ...ship.positions]
      isValid = true
    }
    return {
      ...ship,
      id: index,
      size
    }
  })

  return { ships, positions }
}

const getShip = (axes, size) => {
  const orientationTypes = ['vertical', 'horizontal']
  const orientation = helpers.getRandomItemFromList(orientationTypes)
  const isVertical = orientation === 'vertical'
  const listByOrientationType = isVertical ? BOARD_ROWS : BOARD_COLS
  const [row, col] = axes
  const axis = isVertical ? row : col
  let positions = []
  listByOrientationType.forEach(item => {
    if (item < axis || positions.length >= size) return
    const position = isVertical ? item + col : row + item
    positions = [...positions, position]
  })

  return {
    success: !!(positions.length === size),
    orientation,
    positions
  }
}
