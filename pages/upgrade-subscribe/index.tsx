import axios, { Product } from "../../services/axios";
import { CardBuy } from "../../components/CardBuy";
import { H2 } from "../../components/Titles";
import { Cards } from "..";

export async function getServerSideProps() {
  const response = await axios.get<Product[]>(`/products`);

  return { props: { products: response.data } }
}

export default function UpgradeSubscribe({ products }) {
  return (
    <>
      <H2>Get started with Gscore today!</H2>
      {products && products.length !== 0 &&
        <Cards>
          {products.map(({ id, sitesCount, name, prices }) => (
            <CardBuy
              key={id}
              id={id}
              sitesCount={sitesCount}
              name={name}
              prices={prices}
              upgrade={true}
            />
          ))}
        </Cards>
      }
    </>
  )
}
