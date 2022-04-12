import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { DashboardLayout } from "../components/DashboardLayout"
import { persistor, store } from "../store/store"
import { GlobalStyle } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </DashboardLayout>
  )
}

export default MyApp
