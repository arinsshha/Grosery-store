import React, { useEffect, useState } from 'react';
import './index.css';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CONFIG from './config';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <header>
        <img src={CONFIG.logo} alt="Logo" />
        <h1>{CONFIG.siteName}</h1>
      </header>

      <div className="container">
        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              product={p}
              phone={CONFIG.whatsappNumber}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
        
         <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col-1">
          <h1>Testing Our Website</h1>
          <p>Testing Our Website</p>
          <div className="app-logo">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="footer-col-2">
          <img src="" alt="" />
          <p>Stay Connected</p>
        </div>
        <div className="footer-col-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Testing</li>
            <li>Testing</li>
            <li>Testing</li>
            <li>Testing</li>
          </ul>
        </div>
        <div className="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <p>
      We are a small Indian shop selling affordable and quality daily-use
      products across the country with love and care.
    </p>
  </footer>

  <div className="support">
    <h2>Support</h2>
    <p>
      WhatsApp:{" "}
      <a
        href={`https://wa.me/${CONFIG.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        +91-9509071647
      </a>
    </p>
    <p>Email: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
    <hr />
    <h4>&copy; {new Date().getFullYear()} {CONFIG.siteName}. All rights reserved.</h4>
  </div>

</div>
        {selected && (
        <ProductModal
          product={selected}
          phone={CONFIG.whatsappNumber}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default App;