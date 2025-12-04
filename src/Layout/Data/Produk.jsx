import { gabungTas } from "../Data";

export default function Produk() {
  console.log(gabungTas);
  return (
    <div>
      {gabungTas.map((item) => (
        <div key={item.id}>
          <img src={item.gambar} width={120} />
          <h1>{item.nama_tas}</h1>
          <p>Kategori: {item.categori}</p>
          <p>Harga: Rp {item.price}</p>
        </div>
      ))}
    </div>
  );
}
