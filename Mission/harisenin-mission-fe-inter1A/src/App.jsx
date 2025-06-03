import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./layouts/Login_layout";
import Register from "./pages/Register";
import Beranda from "./layouts/Beranda_layout";
import SemuaProduk from "./layouts/SemuaProduk_layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Beranda" element={<Beranda />}></Route>
        <Route path="/SemuaProduk" element={<SemuaProduk />}></Route>

        {/* <Route index element={<div>home</div>}/>
        <Route path="login" element={<div>login</div>}/>
      
        <Route path="">
          <Route index element={<div>Beranda</div>} />
          <Route path="kategori" element={<div>Kategori</div>} />
          <Route path="contact" element={<div>Contact Us</div>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
