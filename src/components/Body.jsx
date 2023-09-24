import Products from "./Products";
import Navbar from "./Navbar";
const Body = ({ data , filterData}) => {
  console.log(filterData);
  return (
    <div className="body">
      <Navbar />
      <Products data={data} />
    </div>
  );
};
export default Body;
