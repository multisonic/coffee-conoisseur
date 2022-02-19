import Head from "next/head";
import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();
  const { dynamicRoute } = router.query;

  return (
    <>
      <Head>
        <title>{dynamicRoute}</title>
      </Head>
      <div>
        <p>Page {dynamicRoute}</p>
      </div>
    </>
  );
};

export default Dynamic;
