import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook
import About from "./components/About";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";
// import ProductDetail from "./components/ProductDetail";
import Collection from "./components/Collection";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <BrowserRouter>
      <div style={{ padding: "10px", background: "#f5f5f5", textAlign: "center" }}>
        {isLoading ? <p>Loading...</p> : isAuthenticated ? <h2>Welcome, {user.name} 👋</h2> : <h2>Login</h2>}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/ProductDetail/:id" element={<ProductDetail />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
