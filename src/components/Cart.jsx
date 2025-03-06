import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import FakePaymentModal from "./Payment"; // Import the fake payment modal

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showFakeModal, setShowFakeModal] = useState(false); // State for modal
  const [selectedItem, setSelectedItem] = useState(null); // Store item for checkout

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.error("Item removed from cart!");
  };

  // Open Fake Payment Modal for specific item
  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setShowFakeModal(true);
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <Toaster />
        <h1 style={styles.header}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <button style={styles.button} onClick={() => removeFromCart(index)}>Remove</button>
                  <button style={styles.buyButton} onClick={() => handleBuyNow(item)}>Buy Now</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Show the FakePaymentModal when Buy Now is clicked */}
      {showFakeModal && selectedItem && (
        <FakePaymentModal 
          item={selectedItem} 
          onClose={() => setShowFakeModal(false)} 
        />
      )}
    </>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial" },
  header: { fontSize: "28px", marginBottom: "20px" },
  cartList: { listStyleType: "none", padding: "0" },
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
  image: { width: "60px", height: "60px", borderRadius: "5px", marginRight: "10px" },
  button: {
    padding: "8px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  buyButton: {
    padding: "8px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default Cart;
