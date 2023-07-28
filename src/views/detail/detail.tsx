import { useLoaderData } from "react-router-dom";
import { sensors } from "../../data/sensors";

const Detail = () => {
  const sensor = useLoaderData() as (typeof sensors)[number];

  return <>hello world</>;
};

export { Detail };
