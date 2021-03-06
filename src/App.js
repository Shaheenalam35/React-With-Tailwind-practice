import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <h1 className="text-4xl">Hello Tailwind Pricing </h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
