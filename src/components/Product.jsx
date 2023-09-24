const Product = ({ name, price, image }) => {
  console.log(`./../datas/images/${image}`);
  return (
    <div className="product">
      <div className="image-container">
        <img src={require(`.././datas/images/${image}`)} />
      </div>
      <div className="product-info">
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
    </div>
  );
};
export default Product;
