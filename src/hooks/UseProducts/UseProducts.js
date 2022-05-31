import { useEffect, useState } from 'react';

const UseProducts = () => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
};

export default UseProducts;