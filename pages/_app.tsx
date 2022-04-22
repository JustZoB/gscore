import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { DashboardLayout } from "../components/DashboardLayout"
import { persistor, store } from "../store/store"
import { GlobalStyle } from "../styles/globals"
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
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
