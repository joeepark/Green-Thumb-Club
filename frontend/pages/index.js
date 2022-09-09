import { FeatureBlock, GalleryBlock, Hero, ProductsBlock } from '../components';
import CartProvider from '../context/CartContext';
import { PRODUCT_QUERY, IMAGE_QUERY } from '../context/query';


export default function Home({ products, images }) {
  const productsArray = products.data.products.data.slice(1);
  const imagesArray = images.data.images.data.slice(1, 5);
  const featureImage = images.data.images.data[0]

  return (
    <div className="body-container">
      <Hero />
      <div className="products-container">
        {productsArray?.map((product, index) => <ProductsBlock key={index} products={product} />)}
      </div>
      <hr />
      <h4 className="gallery-header">More Ways To Find the Perfect Plant</h4>
      <div className="gallery-container">
        {imagesArray?.map((image, index) => <img src={`${image.attributes.image.data.attributes.formats.small.url}`}
          className="gallery-image"
          key={index} />)}
      </div>
      <hr />
      <div className="feature-block">
        <div>
          <img src={`${featureImage.attributes.image.data.attributes.formats.small.url}`} className='feature-image'/>
        </div>
        <div className="feature-details">
          <h4>Show off your collection</h4>
          <p>If you're a plant hobbiest show off your collection online for many to see!</p>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const productResponse = await fetch('https://green-thumb-club-app.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: PRODUCT_QUERY
    }),
  });
  const products = await productResponse.json();

  const imageResponse = await fetch('https://green-thumb-club-app.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: IMAGE_QUERY,
    }),
  });
  const images = await imageResponse.json();

  return {
    props: { products, images },
  };
}