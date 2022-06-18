export default function Products({ products }) {
  const { title, image, price } = products.attributes
  // console.log('products', products);
  // console.log('black', title);
  // image.data.attributes.formats.small
  return (
    <div>
      <img src={image.data.attributes.formats.small.url} />
      <h1>{title}</h1>
      <h1>{price}</h1>
    </div>
  )
}