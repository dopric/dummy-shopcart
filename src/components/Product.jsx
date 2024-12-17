import React from 'react'


const Product = ({ product, itemAddedToCart }) =>
{


    const { name, price, Image } = product
    return (
        <div className='product'>
            <img className='product-image' src={Image} alt='product' />
            <div className='product-name'>
                <a href='#/product/1'>{name}</a>
            </div>

            <div className='product-price'>${price}</div>
            <div className='product-rating'>4.5 Stars (10 Reviews)</div>
            <button className='button primary add-to-cart'
                onClick={() => itemAddedToCart(product)}
            >Add to Cart</button>
        </div>
    )
}

export default Product