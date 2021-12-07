import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>{params.productId}</h1>
    </section>
  );
};

export default ProductDetail;
