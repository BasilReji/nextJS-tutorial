import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className="main-container">
      <h1>Home Page</h1>
      <Link href={"/blog"}>Blog </Link>
      <Link href={"/docs/1"}>Docs </Link>
      <button onClick={handleClick}>Place Order</button>
      <Link
        href={{
          pathname: "docs/[id]",
          query: {
            id: 1,
          },
        }}
      >
        Docs
      </Link>
    </div>
  );
}
