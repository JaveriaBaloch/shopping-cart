import React from "react";
import { useState,useEffect } from "react";
import items from "./items";
import {connect} from "react-redux"
import {addToBasket} from "./actions/addAction"

function Home(props){
    const [is,setIs] = useState([])
    useEffect(()=>{
        setIs(items)
    })
    return(
        <div className="container">
            <div className="row">
       {is.map((item,key)=>{
            return(
                <div key={key} className="col-lg-3 col-md-5 mx-auto">
                    <div className="card mx-auto my-2">
                        <img className="card-img img" src={item.img}/>
                        <div className="card-body">
                            <p className="my-2"> Price: ${item.price}</p>
                            <button className="btn btn-primary" onClick={()=>props.addToBasket(item.id)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
         </div>
        </div>
    )
}
export default connect(null,{addToBasket})(Home)