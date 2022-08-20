import {REMOVE_ITEM} from "./types"
export const Remove = (id)=>{
    return (dispatch)=>{
        console.log("Remove id",id)
       dispatch({
        type: REMOVE_ITEM,
        payload: id
       })
    }
}    