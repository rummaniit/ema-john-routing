import React from 'react';

const ReviewItems = (props) => {
    let { name, price, quantity, key } = props.product
    let { handleRemove } = props
    return (
        <div className='product'>
            <div>
                <h1 className='product-name'>Name: {name}</h1>
                <h4>Price: {price}</h4>
                <h4>Quantity: {quantity}</h4>
                <button className='btn-regular' onClick={() => handleRemove(key)} >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;