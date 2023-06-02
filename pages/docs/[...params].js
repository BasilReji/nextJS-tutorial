import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();

  const { params = [] } = router.query;

  console.log(params);

  if (params.length === 2)
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  else if (params.length === 1)
    return <h1>Viewing docs for feature {params[0]}</h1>;

  return <h1>Landing Page for docs</h1>;
}

/* for /docs to work, [[..params].js] 

http://localhost:3000/docs/hi/hello
*/
