import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const FakePaymentModal = ({ item, onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleFakePay = () => {
    if (cardNumber.length !== 16 || cvv.length !== 3 || expiry.length < 4) {
      toast.error("Invalid card details!");
      return;
    }

    toast.success(`Payment Successful for ${item.name}! Transaction ID: FAKE12345XYZ`);
    localStorage.removeItem("cart"); // Clear cart after fake payment
    onClose();
  };

  return (
    <div style={styles.modal}>
      <Toaster />
      <h2>Fake Payment</h2>
      <p>Item: {item.name}</p>
      <p>Price: ${item.price.toFixed(2)}</p>

      <input 
        type="text" placeholder="Card Number" maxLength="16"
        value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
        style={styles.input}
      />
      <input 
        type="text" placeholder="CVV" maxLength="3"
        value={cvv} onChange={(e) => setCvv(e.target.value)}
        style={styles.input}
      />
      <input 
        type="text" placeholder="Expiry (MM/YY)"
        value={expiry} onChange={(e) => setExpiry(e.target.value)}
        style={styles.input}
      />
      
      <button onClick={handleFakePay} style={styles.payButton}>
        Confirm Fake Payment
      </button>
      <button onClick={onClose} style={styles.closeButton}>Close</button>
    </div>
  );
};

export default FakePaymentModal;

const styles = {
  modal: {
    position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    padding: "20px", background: "#fff", borderRadius: "8px", textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
  },
  input: { display: "block", margin: "10px auto", padding: "8px", width: "80%" },
  payButton: { padding: "10px", backgroundColor: "#28a745", color: "white", cursor: "pointer" },
  closeButton: { padding: "10px", backgroundColor: "#dc3545", color: "white", cursor: "pointer", marginTop: "10px" }
};
