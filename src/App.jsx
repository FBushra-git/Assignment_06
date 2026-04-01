import React, { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Stats from "./Components/Stats/Stats";
import PremiumDigiTools from "./Components/PremiumDigiTools/PremiumDigiTools";
import StepSection from "./Components/StepsSection/StepsSection";
import SimplePricing from "./Components/SimplePricing/SimplePricing";
import Workflow from "./Components/Workflow/Workflow";
import Footer from "./Components/Footer/Footer";

// Fetch function
const fetchCards = async () => {
  const res = await fetch("/products.json");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

// Promise
const productPromise = fetchCards();

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  //  Add to cart
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.warning("Already added!");
      return;
    }

    setCart((prev) => [...prev, product]); 
    setShowCart(true);
    toast.success("Added to cart");
  };

  //  Remove from cart
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed !!!");
  };

  //  Checkout
  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout complete");
  };

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
      
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
      />

      <Banner />
      <Stats />

      <Suspense
        fallback={
          <div className="py-20 flex flex-col items-center justify-center space-y-4">
            <span className="loading loading-dots loading-lg text-[#7C3AED]"></span>
            <p className="text-gray-400 font-medium animate-pulse">
              Loading amazing tools...
            </p>
          </div>
        }
      >
        <PremiumDigiTools
          productsPromise={productPromise}
          cart={cart}
          showCart={showCart}
          setShowCart={setShowCart}
          handleAddToCart={handleAddToCart}
          handleRemove={handleRemove}
          handleCheckout={handleCheckout}
        />
      </Suspense>

      <StepSection />
      <SimplePricing />
      <Workflow />
      <Footer />

      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;