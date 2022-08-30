export const PRODUCT_QUERY = `
query {
  products {
    data{
      attributes{
        name
        content
        price
        slug
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`


export const IMAGE_QUERY = `
query {
  images {
    data {
      attributes{
        name
        image {
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`