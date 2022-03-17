import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return <div>Coffee Store Page {router.query.id}</div>;
  // {router} returns an obj with a query param on it
};

export default CoffeeStore;
