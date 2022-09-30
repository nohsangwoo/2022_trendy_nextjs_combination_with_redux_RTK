import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../components/Layout'
import { ThemeProvider } from '@mui/material/styles'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '../src/api'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store, { wrapper } from '@src/store/store'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// or for Day.js
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// or for Luxon
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
// or for Moment.js
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import theme from '@src/theme'

import '../styles/globals.css'
// import { Provider as ReduxProvider } from 'react-redux'
// import type { AppProps } from 'next/app'

const persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <ReactQueryDevtools initialIsOpen={false} />
            </PersistGate>
          </Hydrate>
        </QueryClientProvider>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
