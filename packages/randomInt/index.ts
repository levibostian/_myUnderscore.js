// Returns a random whole number between min (inclusive) and max (inclusive)
const _randomInt = (minInclusive = 1, maxInclusive = 1000): number => {
  minInclusive = Math.ceil(minInclusive)
  maxInclusive = Math.floor(maxInclusive)
  return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive
}

export default _randomInt
