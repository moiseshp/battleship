import { selector } from 'recoil'
import {
  gameMaxShotsNumberState,
  gamePositionsState,
  gameShipsState,
  gameInfinityState
} from './atoms'

export const gameStatsSelector = selector({
  key: 'gameStatsSelector',
  get: ({ get }) => {
    const infinity = get(gameInfinityState)
    const maxShotsNumber = get(gameMaxShotsNumberState)
    const positions = get(gamePositionsState)
    const ships = get(gameShipsState)
    const numberOfShotsPlayed = positions.filter(({ status }) => status !== 'none').length
    const hits = positions.filter(({ status }) => status === 'success').length
    const downedShipsNumber = ships.filter(({ size, hits }) => size === hits).length

    return {
      maxShotsNumber: maxShotsNumber === infinity ? 'Infinity' : maxShotsNumber,
      numberOfShotsPlayed,
      hits,
      downedShipsNumber
    }
  }
})

export const gameIsGameOverSelector = selector({
  key: 'gameIsGameOverSelector',
  get: ({ get }) => {
    const ships = get(gameShipsState)
    const downedShipsNumber = ships.filter(({ size, hits }) => size === hits).length
    const allTheShipsHaveBeenShotDown = downedShipsNumber === ships.length
    if (allTheShipsHaveBeenShotDown) return true

    const maxShotsNumber = get(gameMaxShotsNumberState)
    const infinity = get(gameInfinityState)
    const positions = get(gamePositionsState)
    const numberOfShotsPlayed = positions.filter(({ status }) => status !== 'none').length
    if (maxShotsNumber !== infinity && numberOfShotsPlayed >= maxShotsNumber) return true

    return false
  }
})
