import {INCREASE_QUANTITY,DESCREASE_QUANTITY} from "./types"
export const productQuantity = (action,id)=>{
    return (dispatch)=>{
       console.log("inside Action")
       console.log("action", action)
       dispatch({
        type: action === "increase"? INCREASE_QUANTITY:DESCREASE_QUANTITY,
        payload: id
       })
    }
    
}