import { FIZ_BUZZ_CONSTANTS } from "./constants.js"

function defineOperation(iterationValue) {
  if (iterationValue % 3 === FIZ_BUZZ_CONSTANTS.REST_DIVISION && iterationValue % 5 === FIZ_BUZZ_CONSTANTS.REST_DIVISION) {
    return FIZ_BUZZ_CONSTANTS.VISUAL_NUTS
  }
  if (iterationValue % 3 === FIZ_BUZZ_CONSTANTS.REST_DIVISION) {
    return FIZ_BUZZ_CONSTANTS.VISUAL
  }
  if (iterationValue % 5 === FIZ_BUZZ_CONSTANTS.REST_DIVISION) {
    return FIZ_BUZZ_CONSTANTS.NUTS
  }
  return iterationValue
}

function* fizBuzz(startCounter = FIZ_BUZZ_CONSTANTS.DEFAULT_INITIALIZER, limiter = FIZ_BUZZ_CONSTANTS.LIMITER_CONSTANT) {
  for (let iteratorValue = startCounter; iteratorValue <= limiter; iteratorValue++) {
    yield defineOperation(iteratorValue)
    continue
  }
}

[...fizBuzz(FIZ_BUZZ_CONSTANTS.DEFAULT_INITIALIZER)].forEach(item => console.log(item))