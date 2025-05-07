import "./App.scss";
import Arrow from "./components/Arrow/Arrow";
import SliderList from "./components/SliderList/SliderList";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="heading">Хиты продаж</h1>
        <SliderList />
      </div>
    </>
  );
}

export default App;
