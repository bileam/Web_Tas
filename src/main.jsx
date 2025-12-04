import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Layout/Context/CartContent.jsx";
import { CheckoutProvider } from "./Layout/Context/CheckOutContent.jsx";
import { MyOrderProvider } from "./Layout/Context/MyOrder.jsx";
import { CategoryProvider } from "./Admin/Context/CategoryContext.jsx";
import { ProductPorvider } from "./Admin/Context/ProdukContext.jsx";
import { BelanjaProvider } from "./Layout/Context/BelanjaContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <CheckoutProvider>
      <MyOrderProvider>
        <CategoryProvider>
          <ProductPorvider>
            <BelanjaProvider>
              <App />
            </BelanjaProvider>
          </ProductPorvider>
        </CategoryProvider>
      </MyOrderProvider>
    </CheckoutProvider>
  </CartProvider>

  // <StrictMode>
  //   <App />
  // </StrictMode>
);
