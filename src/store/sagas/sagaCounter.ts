// import { getFetchTodos } from './../../page/reactQuery/AxiosUsage'
import { getFetchTodos } from '@pages/reactQuery/AxiosUsage'
import {
  delay,
  all,
  fork,
  //  call,
  put,
  takeEvery,
  // takeLatest
} from 'redux-saga/effects'
import counterSlice from './../reducers/counterSlice'
//  기본적으로 제공하는 api가 파워풀 하다.
// -ref: https://redux-saga.js.org/docs/api/

function* watchIncrease() {
  yield takeEvery(counterSlice.actions.increase, function* () {
    yield delay(1000)
    yield getFetchTodos()
    yield put(counterSlice.actions.decrease(3))
  })
}

// take : 한번만 실행됨
// takeevery : 계속 반복 실행됨
// takelatest : 마지막만 실행됨
export function* counterSaga() {
  // yield takeLatest(DECREASE_SAGA_ASYNC, DECREASESAGA);
  yield all([fork(watchIncrease)])
}
