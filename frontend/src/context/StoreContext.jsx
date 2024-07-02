import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    // for cart item to store its state
    const [cartItems, setCartItems] = useState({})

    const addToCart = async(itemId) => {

        // if item is not in cart, add it with quantity 1
        if (!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        } 
        // if item is in cart, increase its quantity by 1
        else{
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    // for removing item from cart
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
