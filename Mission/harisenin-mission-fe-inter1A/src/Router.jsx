import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>home</div>}/>
        <Route path="login" element={<div>login</div>}/>
      
        <Route path="">
          <Route index element={<div>Beranda</div>} />
          <Route path="kategori" element={<div>Kategori</div>} />
          <Route path="contact" element={<div>Contact Us</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router