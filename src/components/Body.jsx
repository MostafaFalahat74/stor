import Products from './Products'
import Navbar from './Navbar'
const Body = ({data}) => {

    return (<div className="body">
        <Navbar />
        <Products data={data}/>
    </div>)
}
export default Body;