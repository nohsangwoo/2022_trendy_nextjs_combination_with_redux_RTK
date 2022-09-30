import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper'

// export const customHistory = createBrowserHistory()

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    'home',
    'chat',
    'company',
    'drawing',
    'link',
    'user',
    'flag',
    'pointer',
    'snackBar',
    'changedOrientation',
    'noti',
    'counter',
    'sms',
    'history',
    'conferenceModal',
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,

//   // 추가 미들웨어를 적용하는방법(미들웨어 적용할때의 옵션설정도 같이한다)
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       // serializableCheck: {
//       //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       // }
//     }),
//   // }).concat(sagaMiddleware), // 미들웨어 연결하는 방법
//   devTools: process.env.NODE_ENV === 'development',
// })

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    // 추가 미들웨어를 적용하는방법(미들웨어 적용할때의 옵션설정도 같이한다)
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // }
      }),
    // }).concat(sagaMiddleware), // 미들웨어 연결하는 방법
    devTools: process.env.NODE_ENV === 'development',
  })

const store = makeStore()

// wrapper를 생성해줍니다.
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})

// for typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
