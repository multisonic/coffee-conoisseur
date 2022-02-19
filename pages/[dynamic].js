import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const { dynamic } = router.query;

  return (
    <>
      <Head>
        <title>{dynamic}</title>
      </Head>
      <div>
        <p>Page {dynamic}</p>
      </div>
    </>
  );
};

export default DynamicRoute;
