import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log(params);
  // could also destructure above to getStaticProps({params})
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log("router", router);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
      <p className="">{props.coffeeStore.address}</p>
      <p className="">{props.coffeeStore.name}</p>
    </div>
  );
};

export default CoffeeStore;
