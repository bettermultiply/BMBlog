import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='Whole'>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
