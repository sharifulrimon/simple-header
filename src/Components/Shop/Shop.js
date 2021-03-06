import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
    const {products,addToCart}=props;
    

    return (
        <div>
            <h4>This is Shop</h4>
            {
                products.map(pd=><Product key={pd.id} product={pd} addToCart={addToCart}></Product>)
            }
        </div>
    );
};
const mapStateToProps=state=>{
return {
    
    products: state.products
   
}
}
const mapDispatchToProps={
    addToCart: addToCart
}
// const connectToStore= connect(mapStateToProps,mapDispatchToProps);
// connectToStore(Shop);
export default connect(mapStateToProps,mapDispatchToProps)(Shop);