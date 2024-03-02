import { useUnit } from "effector-react/compat"
import { $bestsellerProducts } from "@/context/goods"

const BestsellersGoods = () => {
  const goods = useUnit($bestsellerProducts)
  console.log(goods)

  return (<div/>)
}

export default BestsellersGoods
