import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./components/app_context/context";
import LoginLayout from "./components/login/login_layout";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import MainLayout from "./components/layout/main_layout";
import Home from "./components/layout/body/home";
import Settings from "./components/settings/settings";
import Forgot from "./components/login/forgot";
import Product from "./components/layout/body/products/product";
import Items from "./components/layout/body/items/items";

function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="items/:itemId" element={<Items />} />
            <Route path="product" element={<Product />} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<LoginLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
