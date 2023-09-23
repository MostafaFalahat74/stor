import Product from './Product' 
const Products =({data})=>{
    return(<div className='products'>
    {
        data.map((product , index)=><Product
         name={product.name}
         price={product.price}
          key={index}/>)
    }
    </div>)
}

export default Products;