const MAX_NUMBER_COLUMNS = 10
export const BOARD_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
export const BOARD_COLS = [...new Array(MAX_NUMBER_COLUMNS).keys()].map(key => key + 1)
export const SHIPS = [
  { size: 4 },
  { size: 3 },
  { size: 3 },
  { size: 2 },
  { size: 2 },
  { size: 2 },
  { size: 1 },
  { size: 1 },
  { size: 1 },
  { size: 1 }
]
