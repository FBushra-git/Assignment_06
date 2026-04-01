import React, { use } from "react";

const PremiumDigiTools = ({
  productsPromise,
  cart,
  showCart,
  setShowCart,
  handleAddToCart,
  handleRemove,
  handleCheckout,
}) => {
  // Resolve promise
  const data = use(productsPromise);

  // Handle both possible API shapes
  const products = Array.isArray(data) ? data : data?.products || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* TOGGLE */}
        <div className="mt-6 inline-flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setShowCart(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              !showCart
                ? "bg-purple-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setShowCart(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              showCart
                ? "bg-purple-600 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* PRODUCTS  */}
      {!showCart && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 pt-12 shadow-sm hover:shadow-md transition"
            >
              {/* BADGE */}
              {product.badge && (
                <span
                  className="absolute top-4 right-4 z-10 text-[11px] px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: product.badgeColor || "#F3F4F6",
                    color: product.badgeTextColor || "#6B7280",
                  }}
                >
                  {product.badge}
                </span>
              )}

              {/* ICON */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-xl mb-4">
                {product.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {product.description}
              </p>

              {/* PRICE */}
              <div className="mt-5">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  {product.billing}
                </span>
              </div>

              {/* FEATURES */}
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {product.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-6 w-full py-2.5 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700 transition"
              >
                {cart.find((item) => item.id === product.id)
                  ? "Added ✓"
                  : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CART  */}
      {showCart && (
        <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              Your cart is empty 🛒
            </p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border rounded-xl p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-xl">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="flex justify-between items-center mt-6 text-lg font-bold">
                <span>Total</span>
                <span>
                  $
                  {cart.reduce(
                    (acc, item) => acc + Number(item.price),
                    0
                  )}
                </span>
              </div>

              {/* CHECKOUT */}
              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PremiumDigiTools;