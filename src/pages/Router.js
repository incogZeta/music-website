import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Myalbum } from "./Myalbum";
import { Signup } from "./Signup";
import { Login } from "./Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Myalbum" element={<Myalbum />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};