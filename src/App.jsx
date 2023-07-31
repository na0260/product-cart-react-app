import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import CartProduct from "./pages/CartProduct.jsx";
import Otp from "./pages/Otp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/login" element={<Loginpage/>}></Route>
              <Route path="/varification" element={<Otp/>}></Route>
              <Route path="/cart" element={<CartProduct/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
