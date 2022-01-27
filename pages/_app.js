import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page)
  return <Component {...pageProps} />
  // return getLayout(<Component {...pageProps} />)
}