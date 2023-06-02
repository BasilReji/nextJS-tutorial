import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();

  const productID = router.query.productId;

  return <h1>Review about Product {productID}</h1>;
}
