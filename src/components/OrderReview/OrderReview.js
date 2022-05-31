import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/UseCart/UseCart';
import UseProducts from '../../hooks/UseProducts/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview = () => {
    let [products] = UseProducts()
    let [cart, setCart] = UseCart(products)
    let navigate = useNavigate()
    let handleRemove = (key) => {
        let newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    let handlePlaceOrder = () => {
        navigate('/order')
        setCart([])
        clearTheCart()
    }
    return (
        <div>
            {/* {
                cart.length
            }
            <br />
            {
                products.length
            }
            <h2>This is Order Review</h2>
            <Cart cart={cart}></Cart> */}

            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItems
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                        >

                        </ReviewItems>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button className="btn-regular" onClick={handlePlaceOrder}>Place order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;