

const Product = (props) => {
   
   const {addToCart,product}= props;
    return (
        <div style={{border: '1px solid black',margin:'10px',padding:'10px'}}>
            <h5>{product.name}</h5>
            <h3>{product.id}</h3>
            <button onClick={()=>addToCart(product.id,product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;