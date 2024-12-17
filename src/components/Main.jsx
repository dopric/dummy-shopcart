import React from 'react'
import Product from './Product'

const Main = ({ productList, addToCart }) =>
{
    return (
        <div className='col2'>
            <h2>Products</h2>
            <div className='products'>
                {!productList || productList.length === 0 && <div>There are no products</div>}
                {productList != null && productList.map(product =>

                    <Product key={product.id} product={product} itemAddedToCart={addToCart} />
                )}
            </div>
        </div>
    )
}

export default Main