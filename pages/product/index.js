import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>
        <Link href={"/product/1"}>Product 1</Link>
      </h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
    </>
  );
}
