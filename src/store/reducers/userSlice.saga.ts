import { createSlice } from '@reduxjs/toolkit'
export interface UserState {
  userInfo?: any
  isLogin: boolean
  isConfirmed: boolean
  isVerify: boolean
}

const initialState: UserState = {
  userInfo: [],
  isLogin: false,
  isConfirmed: false,
  isVerify: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: { payload: any }) {
      state.userInfo = action.payload
    },
    setLogin(state) {
      state.isLogin = true
    },
    setLogout(state) {
      state.isLogin = false
    },
    setIsConfirmed(state, action: { payload: boolean }) {
      state.isConfirmed = action.payload
    },
    setVerify(state, action: { payload: boolean }) {
      state.isVerify = action.payload
    },
    clear: () => initialState,
  },
})

export default userSlice
