import { sample } from "effector"
import { getHazyOfficesByCity, getHazyOfficesByCityFx, makePayment, makePaymentFx } from "@/context/order/index"

sample({
  clock: getHazyOfficesByCity,
  source: {},
  fn: (_, data) => data,
  target: getHazyOfficesByCityFx,
})

sample({
  clock: makePayment,
  source: {},
  fn: (_, data) => data,
  target: makePaymentFx,
})
