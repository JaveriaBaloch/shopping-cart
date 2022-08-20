import {connect} from "react-redux"
import basketReducer from "../reducers/basketReducer"
import {useState,useEffect} from "react"
import {productQuantity} from "./actions/productQuantity"
import {Remove} from "./actions/removeItem"
function Cart (props, productQuantity){
    console.log("basket",props)
    
    // props.basketProps.products.map(e=>e)
   let inCart = []
useEffect(()=>{
   console.log(inCart)
})
    Object.keys(props.basketProps.products).forEach(item=>{
       if(props.basketProps.products[item].inCart){
        inCart.push(props.basketProps.products[item])
       }
    })
    return(
        <div>
          <h1 className="text-center my-4">Your cart</h1>
          <div className="container">
            <div className="row">
                <div className="card card-body">
                    total: $ {props.basketProps.cartCost}
                </div>
                {inCart.map((item,key)=>{
                  
                    return(
                    <div key={key} className="card card-body col-lg-3 col-md-5 m-3">
                        
                        <img src={item.img} className="cart-img card-img m-3"/>
                         <div className="">
                             <p className="m-3">
                                 price: ${item.price* item.number}
                             </p>
                             <p className="m-3">
                                <span className="d-flex">quantity: 
                                <span className="btn-group"><button className="btn btn-dark" onClick={()=>props.productQuantity("decrease",item.id)}>-</button><span className="m-auto px-3 btn btn-primary">{item.number}</span><button className="btn btn-dark" onClick={()=>props.productQuantity("increase", item.id)}>+</button></span> </span> 
                                <button className="btn btn-danger mt-5" onClick={()=>props.Remove(item.id)}>Remove</button>
                             </p>
                             
                             </div>
                         </div>
                    )
                })}
            </div>
          </div>
         </div>
    )
}
const mapStateToProps = state =>({
    basketProps: state.basketState
})
export default connect(mapStateToProps,{productQuantity,Remove})(Cart)