import React from 'react'

const Basket = ({ cartItems, clearCart, increaseQuantity, decreaseQuantity }) =>
{
    const sum = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);



    return (
        <aside className='basket col1'>
            <h2>Cart items</h2>

            {!cartItems || cartItems.length == 0 && <p>Cart is empty</p>}

            {cartItems && cartItems.map(item =>

                <div key={item.id} className='cart-item'>
                    <div className="basket-actions">
                        <button className='add-button'
                            onClick={() => increaseQuantity(item)}>+</button>
                        <button className='remove-button'
                            onClick={() => decreaseQuantity(item)}>-</button>
                    </div>
                    <div>{item.name}</div>
                    <div className='right'>
                        {item.quantity} x ${item.price}
                    </div>
                </div>


            )}
            {cartItems.length !== 0 && (
                <>
                    <div className='basket-actions'>
                        <button className='clear-button' onClick={clearCart}>Clear Cart</button>
                    </div>
                    <div className="sum">
                        Total: ${sum}
                    </div>
                </>
            )}

        </aside>
    )
}

export default Basket