import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { DashboardLayout } from "../components/DashboardLayout"
import { AxiosInterceptors } from "../services/axios"
import { persistor, store } from "../store/store"
import { GlobalStyle } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  // AxiosInterceptors.setup(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <DashboardLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </DashboardLayout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
