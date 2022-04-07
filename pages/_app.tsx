import { DashboardLayout } from "../components/DashboardLayout"
import { GlobalStyle } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </DashboardLayout>
  )
}

export default MyApp
