import { TestType } from './../types'

export const testReducer = (state = 'hi', action) => {
  switch (action.type) {
    case TestType:
      return { message: action.payload }
    default:
      return { ...state }
  }
}
