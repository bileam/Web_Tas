import { useLocation, useParams } from "react-router-dom";
import { dammy } from "../Data/Datatasa";
const DetailCart = () => {
  const { id } = useParams();
  const produk = dammy.find((p) => p.id === parseInt(id));
  console.log(produk);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default DetailCart;
