import { ProductStyle } from "../styles/ProductStyle"

export default function Products({ products }) {
  const { title, image, price } = products.attributes

  return (
    <ProductStyle>
      <img src={image.data.attributes.formats.small.url} />
      <h2>{title}</h2>
      <h2>{price}</h2>
    </ProductStyle>
  )
}