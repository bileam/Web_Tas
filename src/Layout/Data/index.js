import Tas from "./Tas.json";
import KategoriTas from "./Ketegori.json";

export const dammyTas = Tas;
export const dammyKategori = KategoriTas;

export const gabungTas = Tas.map((tas) => {
  const categori = KategoriTas.find((k) => k.id === tas.KategoriTas);
  return {
    ...tas,
    categori: categori ? categori.NamaKategori : "tidak ada kategori",
  };
  
});
