const Product = ({ name, price }) => {
  return (<div className="product">
    <h5>{name}</h5>
    <h5>{price}</h5>
  </div>)
}
export default Product;