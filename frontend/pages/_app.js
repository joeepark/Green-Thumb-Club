import '../styles/globals.css'
import { Provider, createClient } from 'urql';

// Create a env file to hide the url while developing
// Connect to the db by creating a client
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
