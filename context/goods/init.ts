import { sample } from "effector"
import {
  loadOneProductFx, loadOneProduct, loadProductsByFilter,
  loadProductsByFilterFx, loadWatchedProductsFx, loadWatchedProducts
} from "@/context/goods/index"
import { $products, $currentProduct, $watchedProducts } from "@/context/goods/state"

sample({
  clock: loadOneProduct,
  source: $currentProduct,
  fn: (_, data) => data,
  target: loadOneProductFx,
})

sample({
  clock: loadProductsByFilter,
  source: $products,
  fn: (_, data) => data,
  target: loadProductsByFilterFx,
})

sample({
  clock: loadWatchedProducts,
  source: $watchedProducts,
  fn: (_, data) => data,
  target: loadWatchedProductsFx,
})