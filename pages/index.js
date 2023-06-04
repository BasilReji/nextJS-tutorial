import fs from "fs";
import path from "path";

function HomePage(props) {
  let { products } = props;
  return (
    <ul className="main-container">
      {products.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

/* 
process.cwd root directory mot pages
*/

export async function getStaticProps(context) {
  let filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.promises.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data)
    return {
      redirect: {
        destination: "/no-data",
      },
    };

  if (data.products.length === 0)
    return {
      notFound: true,
    };

  return {
    props: {
      products: data.products,
    },
    revalidate: 600, // rerender or regenerate
  };
}

export default HomePage;
