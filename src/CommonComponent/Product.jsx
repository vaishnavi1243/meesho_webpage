import Productlist from "../Constants/Productlist";

const Product = () => {
  return (
    <>
      <div className="productlist">
        {Productlist.map((product, index) => (
          <div className="product_card" key={index}>
            <img src={product.productimage} alt={product.productname} />
            <h5>{product.productname}</h5>
            <p>{product.availability}</p>
            <p>{product.cost} {product.costinfo}</p>
            <p>{product.rating} {product.reviews}</p>
            {(index + 1) % 5 === 0 && <div className="row_divider"></div>}
        
          </div>
          // Add a condition to display a new row every 5 products
         ))}
      </div>
    </>
  );
};

export default Product;
