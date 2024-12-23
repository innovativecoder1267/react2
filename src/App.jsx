import React, { useState } from "react";
import "./App.css";

function ProductCard({ id, image, info, handleAdd, handleRemove }) {
  return (
    <div className="product-card">
      <img src={image} alt={`Product ${id}`} className="product-image" />
      <p>{info}</p>
      <button className="btn add-btn" onClick={() => handleAdd(id)}>
        Add to Cart
      </button>
      <button className="btn remove-btn" onClick={() => handleRemove(id)}>
        Remove from Cart
      </button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState({});
  const [email, setEmail] = useState("");

  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    image: "https://via.placeholder.com/150", // Placeholder image
    info: `This is info about product ${index + 1}`,
  }));

  const handleAddToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Shopping Cart</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to the World of E-Commerce!</h1>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
      </header>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            info={product.info}
            handleAdd={handleAddToCart}
            handleRemove={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
