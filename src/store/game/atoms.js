import { atom } from 'recoil'

const game = {
  isActive: false,
  hasInfiniteAttempts: true,
  maxAttempts: 0,
  attemptsPlayedNumber: 0,
  positions: [],
  ships: []
}

export const gameIsActiveState = atom({
  key: 'gameIsActiveState',
  default: game.isActive
})

export const gameHasInfiniteAttemptsState = atom({
  key: 'gameHasInfiniteAttemptsState',
  default: game.hasInfiniteAttempts
})

export const gameMaxAttemptsState = atom({
  key: 'gameMaxAttemptsState',
  default: game.maxAttempts
})

export const gameAttemptsPlayedNumberState = atom({
  key: 'gameAttemptsPlayedNumberState',
  default: game.attemptsPlayedNumber
})

export const gameShipsState = atom({
  key: 'gameShipsState',
  default: game.ships
})

export const gamePositionsState = atom({
  key: 'gamePositionsState',
  default: game.positions
})
