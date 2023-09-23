import Header from "./components/Header";
import Body from "./components/Body";
import data from './datas/data';
function App() {
  console.log(data);
  return (
    <div className="container">
      <Header />
      <Body data={data} />
    </div>
  );
}

export default App;
