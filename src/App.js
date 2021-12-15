import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Cart from "./components/cart";
import Admin from "./components/admin";
import Home from "./components/home";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import About from "./components/about";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalState from './context/globalState';




function App() {

  const test = () => {
    let colors = [ {color: "red",quantity: 10,},{color: "blue",quantity: 3,},{color: "green",quantity: 5,},{color: "yellow",quantity: 2,},{color: "purple",quantity: 1,},{color: "red",quantity: 10,},{color: "blue",quantity: 3,},{color: "green",quantity: 5,},

    ];

    for (let i = 0; i < colors.length; i++) {
      let item = colors[i];
      console.log(item.color);
    }
    let sum = 0;
    for (let i = 0; i < colors.length; i++) {
      let num = colors[i];
      sum += num.quantity;
    }
    console.log(sum);

    let wantedColor = "green";
    let wantedColorTotal = 0;
    for (let i = 0; i< colors.length; i++){
      let found = colors[i];

      if (found.color === wantedColor) {
      wantedColorTotal += found.quantity
      }
    }
    console.log(wantedColor);
  };

  return (
    <div className="App">
      {test()}
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="page-content">

          <Routes>
            <Route path="/home" exact element={<Home/>}></Route>
            <Route path="/catalog" exact element={<Catalog/>}></Route>
            <Route path="/admin" exact element={<Admin/>}></Route>
            <Route path="/about" exact element={<About/>}></Route>
            <Route path="/cart" exact element={<Cart/>}></Route>
          </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
