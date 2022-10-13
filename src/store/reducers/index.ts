import { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, CombinedState, combineReducers } from 'redux'
import counterSlice, { CounterState } from './counterSlice.saga'
import userSlice, { UserState } from './userSlice.saga'

export interface ReducerStates {
  counter: CounterState
  user: UserState
}

// for server side
const rootReducer = (
  state: ReducerStates,
  action: AnyAction,
): CombinedState<ReducerStates> => {
  // hydration이 발생했을 때 처리하는 부분을 별도로 작성해줍니다.

  //   console.log('action Type!!: ', action.type)
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }

  return combineReducers({
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  })(state, action)
}

export default rootReducer
