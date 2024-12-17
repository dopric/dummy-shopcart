import React from 'react'

const Header = ({ cartItemsCount }) =>
{
    return (

        <header>
            <div>
                <a href='#/'>
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div className='header-links'>
                <a href='#/cart'>Cart</a>
                {cartItemsCount > 0 && <button className='badge'>{cartItemsCount}</button>}
                <a href='#/signin'>Sign In</a>
            </div>
        </header>

    )
}

export default Header