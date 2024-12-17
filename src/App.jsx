
import './App.css'
import Basket from './components/Basket'
import Header from './components/Header'
import Main from './components/Main'
import { data } from './data'
import { useState, useEffect } from 'react'

function App()
{
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  useEffect(() =>
  {
    setCartCount(cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cartItems])

  const handleAddItemToCart = (product) =>
  {
    var quantity = 1;
    console.log('Add to cart:', product);
    const existItem = cartItems.find((x) => x.id === product.id);
    if (existItem)
    {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...existItem, quantity: existItem.quantity + 1 } : x
        )
      );
    }
    else
    {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  }

  const handleClearCart = () =>
  {
    setCartItems([]);
  }

  const handleOnIncreaseQuantity = (product) =>
  {
    console.log('Increase quantity:', product);
    var existItem = cartItems.find((x) => x.id === product.id);
    if (existItem)
    {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...existItem, quantity: existItem.quantity + 1 } : x));
    }
  }
  const handleOnDecreaseQuantity = (product) =>
  {
    const existItem = cartItems.find((x) => x.id === product.id);
    if (existItem.quantity === 1)
    {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
    else
    {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...existItem, quantity: existItem.quantity - 1 } : x));
    }
  }

  const products = data;

  return (
    <>
      <div className='App'>
        <Header cartItemsCount={cartCount} />
        <div className='main'>
          <Main productList={products} addToCart={handleAddItemToCart} />
          <Basket cartItems={cartItems} clearCart={handleClearCart}
            increaseQuantity={handleOnIncreaseQuantity}
            decreaseQuantity={handleOnDecreaseQuantity} />
        </div>
      </div>
    </>
  )
}

export default App
