export const GetAllProductwith = (product, category) => {
  return product.map((item) => {
    const kategori = category.find((k) => k.id === item.categoryId);
    return {
      ...item,
      namaKategori: kategori ? kategori.namakategori : "tidak ada kategori",
    };
  });
};

export const getProdukByIdkategori = (datas, id) => {
  return datas.filter((k) => k.categoryId === id);
};
