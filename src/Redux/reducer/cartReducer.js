
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
const initialState= {cart:[],
    products:[ 
    {name: 'lenovo', id:1},
    {name: 'Asus', id:2},
    {name: 'Hp', id:3},
    {name: 'Dell', id:4}]
}
const cartReducer = (state=initialState,action) => {
switch(action.type){
    case ADD_TO_CART:
       
        const newItem={
            prductId: action.id,
            name: action.name,
            cartId: state.cart.length +1
        }
        const newCart= [...state.cart,newItem]
        return{...state,cart:newCart}
        
    case REMOVE_FROM_CART:
            
                const id= action.id;
                const remainingcart=state.cart.filter(item=>item.cartId!== id)
            return {...state,cart: remainingcart}
    default:
        return state;
}
  
};

export default cartReducer;