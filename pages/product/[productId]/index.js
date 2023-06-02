import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();

  const productID = router.query.productId;

  return <h1>Details about Product {productID}</h1>;
}
