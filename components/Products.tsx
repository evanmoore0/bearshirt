import products from '../data/products'
import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart/react'
import Image from 'next/image'


const Products = () => {
  const { addItem, removeItem } = useShoppingCart()

  return (
    <section className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <Image src={product.image} alt={product.name} 
          width = {100}
          height = {100}
          />
          <h2>{product.name}</h2>
          <p className="price">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
          <button
            className="cart-style-background"
            onClick={() => {
              console.log(product)
              addItem(product)
            }}
          >
            Add to cart
          </button>
          <button
            className="cart-style-background"
            onClick={() => removeItem(product.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </section>
  )
}

export default Products
