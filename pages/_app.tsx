import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '../src/api'
import Layout from '../components/Layout'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import '../styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux'
import store, { wrapper } from '@src/store/store'
import type { AppProps } from 'next/app'

const persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <ReduxProvider store={store}> */}
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistGate>
        {/* </ReduxProvider> */}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(MyApp)
