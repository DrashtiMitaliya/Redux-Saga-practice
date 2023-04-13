import {ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART} from './constant'


export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('add cart called ', action)
            return [action.data, ...data];

        case REMOVE_FROM_CART:
            console.log('data cart remove' ,action)
            data.length = data.length!==0 && data.length-1
            return [...data] 
        
            case EMPTY_CART:
            console.log('empty cart' ,action)
            data =[]
            return [...data]

        default:
            return data
    }


}