import { productQuantity } from "../components/actions/productQuantity"
import {GET_NUMBERS_BASKET,INCREASE_QUANTITY,DESCREASE_QUANTITY,ADD_PRODUCT_BASKET,REMOVE_ITEM} from "../components/actions/types"
import items from "../components/items"
const initailState = {
    basketNumbers:0,
    cartCost: 0,
    products:{
        ...items
    }
   
}
export default (state = initailState, action)=>{
    let productSelected= {...state.products[action.payload]}
    switch(action.type){
        case ADD_PRODUCT_BASKET:
           
            productSelected.number += 1
            productSelected.inCart = true
            return{
             basketNumbers: state.basketNumbers+1,
             cartCost : state.cartCost + state.products[action.payload].price,
             products:{
                ...state.products,
                [action.payload] : productSelected
            }
            }
        case GET_NUMBERS_BASKET:
            // if(productSelected)
            return{
                ...state
            }
        case INCREASE_QUANTITY:
           console.log("payload",action.payload)
            productSelected = {...state.products[action.payload]}
            console.log("productSelected",productSelected)
            productSelected.number +=1
            return{
                cartCost : state.cartCost + state.products[action.payload].price,
               products:{
                ...state.products,
                [action.payload]: productSelected
               },
               basketNumbers : state.basketNumbers +1
            }
        case DESCREASE_QUANTITY:
            console.log("payload",action.payload)
            productSelected = {...state.products[action.payload]}
            console.log("productSelected",productSelected)
             if(productSelected.number>1)
            {
               
                productSelected.number -=1
                productSelected.inCart = true
            }else{
                productSelected.inCart = false
                
                
            }
           return{
            
            cartCost : state.cartCost - state.products[action.payload].price,
            products:{
             ...state.products,
             [action.payload]: productSelected
            },
            basketNumbers : state.basketNumbers-1
           }
        case REMOVE_ITEM:
            // productSelected= productSelected[action.payload]
            if(state.basketNumbers>=1){
            console.log(productSelected)
            productSelected.inCart = false
            let numbers = productSelected.number
            return{
               ...state,
               cartCost : state.cartCost -  (numbers*productSelected.price),
               products:{
                ...state.products,
                [action.payload]: productSelected
               },
               basketNumbers: state.basketNumbers - numbers

            }
            }
            else{
                productSelected.inCart = false
            }
        default:
            return state
    }
}