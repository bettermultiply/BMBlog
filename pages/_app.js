import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <html className='Whole'>
    <Component {...pageProps} />
  </html>
  )
}

export default MyApp
