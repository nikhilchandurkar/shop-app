import "./globals.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Auth/Auth_Pages/SignUp"
import SignIn from "./Auth/Auth_Pages/SingIn"
import Auth from "./Auth/Auth"
import Home from "./Root/Pages/Home"
import Contact from "./Root/Pages/Contact"
import Kart from "./Root/Pages/Kart"
import Like from "./Root/Pages/Like"
import Products from "./Root/Pages/Products"
import Orders from "./Root/Pages/Orders"
import Root from "./Root/Root"
import NotFound from "./Root/Pages/NotFound";

const App = () => {

  return (
    <>
      <main className="h-screen flex">
          <Routes>
            <Route element={<Root />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/kart" element={<Kart />}/>
              <Route path="/like" element={<Like />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/orders" element={<Orders />}/>
            </Route>
            <Route element={<Auth />}>
              <Route element={<SignIn />} path="/sign-in" />
              <Route element={<SignUp />} path="/sign-up" />
            </Route>
            <Route path="*" element={<NotFound/>} /> 
          </Routes>
      </main>
    </>
  );
};

export default App;
