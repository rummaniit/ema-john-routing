import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";


const UseCart = (products) => {
    let [cart, setCart] = useState([])
    useEffect(() => {
        if (products.length) {
            let savedCart = getStoredCart()
            let storedCart = []
            for (let key in savedCart) {
                let addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    let quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products])
    return [cart, setCart]
};

export default UseCart;