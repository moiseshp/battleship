export const getRandomItemFromList = (list) => {
  const min = 0
  const max = list.length
  const position = getRandomNumber(min, max)
  return list[position]
}

export const getId = () => Math.round((Math.random() * 36 ** 12)).toString(36)

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min
