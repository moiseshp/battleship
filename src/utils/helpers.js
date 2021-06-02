export const getRandomItemFromList = (list) => {
  const min = 0
  const max = list.length
  const position = getRandomNumber(min, max)
  return list[position]
}

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min
