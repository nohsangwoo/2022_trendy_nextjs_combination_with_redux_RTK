import {
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from '../store'

interface InitialState {
  number: number
  noticount: number
  dummyNumber: number[]
  sign_company: string
}

const initialState: InitialState = {
  number: 0,
  noticount: 0,
  dummyNumber: Array(100)
    .fill(undefined)
    .map((v, i) => (i + 1) * 100),
  sign_company: '',
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state, action: PayloadAction<number>) {
      state.number = state.number + action.payload
    },
    decrease(state, action: PayloadAction<number>) {
      state.number = state.number - action.payload
    },
    totalCountDecrease(state) {
      state.noticount = state.noticount - 1
    },
    setNotiListCount(state, action: PayloadAction<number>) {
      state.noticount = action.payload
    },
    setSign_company(state, action: PayloadAction<string>) {
      state.sign_company = action.payload
    },
  },
  /*  extraReducers: builder =>
    builder
      .addCase(increaseAsync.pending, (state, action) => {})
      .addCase(increaseAsync.fulfilled, (state, action) => {})
      .addCase(increaseAsync.rejected, (state, action) => {})
      .addCase(decreaseAsync.pending, (state, action) => {})
      .addCase(decreaseAsync.fulfilled, (state, action) => {})
      .addCase(decreaseAsync.rejected, (state, action) => {})

      .addMatcher(
        action => {
          return action.type.includes('/pending')
        },
        (state, action) => {
          console.log('add matcher activate on pending function')
        },
      )

      .addDefaultCase((state, action) => {}), */
})

export default counterSlice

const numSelect = (state: RootState) => state.counter.number
const noticountSelect = (state: RootState) => state.counter.noticount

export const numSelector = createDraftSafeSelector(numSelect, state => state)

export const noticountSelector = createDraftSafeSelector(
  noticountSelect,
  state => state,
)

export const allCounterStateSelector = createDraftSafeSelector(
  numSelect,
  noticountSelect,
  (num, noticount) => ({
    num,
    noti: noticount,
  }),
)
