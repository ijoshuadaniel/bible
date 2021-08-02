import { TestType } from './../types'

export const TestAction = (data) => ({
  type: TestType,
  payload: data,
})
