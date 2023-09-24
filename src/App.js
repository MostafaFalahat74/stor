import Header from "./components/Header";
import Body from "./components/Body";
import data from "./datas/data";
import { useEffect } from "react";

function App() {
  var filterData="a";
  useEffect(() => {
     filterData=[...new Set(data.map((item)=>item.brand))];
  }, []);
  return (
    <div className="container">
      <Header />
      <Body data={data} filterData={filterData} />
    </div>
  );
}

export default App;
