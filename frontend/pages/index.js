import Head from 'next/head'
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';
import Products from '../components/products';
import { Gallery } from '../styles/Gallery';

export default function Home() {
  // Fetch the data using useQuery
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  // Conditional rendering based on status
  if (fetching) return <h1>...Loading</h1>
  if (error) return <h1>There is an error! {error.message}</h1>

  // Create a component that will be the title and price and image of the data
  // Loop through the data.products.data array to create these components
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Green Thumb Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Green Thumb Club</h1>
        <Gallery>
        {products.map(element => (
          <Products key={element.attributes.slug} products={element}/>
        ))}
        </Gallery>
      </main>
    </div>
  )
}
