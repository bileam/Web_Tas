import { useContext } from "react";
import { CategoryProduct } from "../Context/CategoryContext";
import { ProductContext } from "../Context/ProdukContext";

const Read = () => {
  const { arrCategory, addCategory } = useContext(CategoryProduct);
  const { arrProduct, setArrCategory } = useContext(ProductContext);

  //   console.log("ini kategori", arrCategory);
  //   console.log("ini product", arrProduct);

  const getAllProductCategory = arrProduct.map((item) => {
    const kategori = arrCategory.find((k) => k.id === item.categoryId);
    return {
      ...item,
      nama_kategori: kategori
        ? kategori.namakategori
        : "kategori tidak di temukan",
    };
  });

  // console.log("ini adalah semua product", getAllProductCategory);
  return (
    <div className="flex gap-1  w-full flex-col  ">
      <p className="font-Roboto text-sm  font-semibold  ">Kategori Product</p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 ">
        {arrCategory.map((item, index) => (
          <div
            key={index}
            className="flex-col flex    font-Roboto  shadow px-4 w-full"
          >
            <img
              src={item.gambar}
              alt=""
              className=" w-45 h-35 object-cover py-1 rounded"
            />
            <div className="flex flex-col py-2 text-[14px]">
              {/* <h1 className="text-green-500 font-semibold">{item.nama_tas}</h1> */}
              <h1 className="text-green-500 font-semibold">
                {item.namakategori}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Read;
