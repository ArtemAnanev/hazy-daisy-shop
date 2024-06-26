import { sample } from "effector"
import { getHazyOfficesByCity, getHazyOfficesByCityFx } from "@/context/order/index"

sample({
  clock: getHazyOfficesByCity,
  source: {},
  fn: (_, data) => data,
  target: getHazyOfficesByCityFx,
})
