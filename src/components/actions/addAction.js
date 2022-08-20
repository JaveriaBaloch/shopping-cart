import { ADD_PRODUCT_BASKET } from "./types";
export const addToBasket  = (ID) =>{
    return(dispatch)=>{
        console.log("removing ITEM")
        dispatch({
        type: ADD_PRODUCT_BASKET,
        payload: ID,
        })
    }
}