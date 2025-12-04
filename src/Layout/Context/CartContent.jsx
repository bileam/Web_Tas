import { createContext, useState } from "react";

// 1. Membuat Context kosong sebagai "penyimpanan global"
//    Ini seperti membuat database kecil yang bisa diakses semua halaman.
export const CartContext = createContext();

// 2. Membungkus seluruh aplikasi dengan CartProvider,
//    sehingga semua komponen anak bisa akses keranjang lewat useContext().
export const CartProvider = ({ children }) => {
  // 3. State utama untuk menyimpan isi keranjang
  //    cart adalah array, isinya produk-produk
  //    setCart untuk mengubah cart
  const [cart, setCart] = useState([]);
  const [Beli, setBeli] = useState([]);
  //   4. FUNGSI ADD TO CART
  const addToCart = (product) => {
    // 5. Mengupdate array cart berdasarkan kondisi sebelumnya
    setCart((prev) => {
      // 6. Mengecek apakah produk sudah ada di keranjang
      const exist = prev.find((item) => item.id === product.id);

      // 7. Jika produk SUDAH ADA → tambah qty
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      // 8. Jika produk BELUM ADA → masukkan produk baru dengan qty = 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const QtyPlus = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const QtyMinus = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  //   Menghapus data dengan id
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // menghapus semua data
  const clearCart = () => {
    setCart([]);
  };
  //   menampung data baru
  const addNewData = (newData) => {
    setBeli(newData);
  };

  return (
    // 9. Mengirim cart, setCart, dan addToCart ke seluruh aplikasi
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        Beli,
        setBeli,
        addNewData,
        QtyPlus,
        QtyMinus,
        clearCart,
      }}
    >
      {/* Semua komponen di App.jsx memiliki akses ke Context */}
      {children}
    </CartContext.Provider>
  );
};
