import { atom } from 'recoil'
const infinity = -1
const game = {
  isActive: false,
  maxShotsNumber: infinity,
  positions: [],
  ships: [],
  infinity
}

export const gameIsActiveState = atom({
  key: 'gameIsActiveState',
  default: game.isActive
})

export const gameMaxShotsNumberState = atom({
  key: 'gamemaxShotsNumberState',
  default: game.maxShotsNumber
})

export const gamePositionsState = atom({
  key: 'gamePositionsState',
  default: game.positions
})

export const gameShipsState = atom({
  key: 'gameShipsState',
  default: game.ships
})

export const gameInfinityState = atom({
  key: 'gameInfinityState',
  default: game.infinity
})
