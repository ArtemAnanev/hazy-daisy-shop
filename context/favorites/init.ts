import { sample } from "effector"
import {
  addProductsFromLSToFavorites,
  addProductsFromLSToFavoritesFx,
  addProductToFavoriteFx,
  addProductToFavorites,
  deleteFavoriteItemFx,
  deleteProductFromFavorites,
  getFavoriteItemsFx,
  loadFavoriteItems
} from "."
import { $favorites } from "./state"

sample({
  clock: addProductToFavorites,
  source: $favorites,
  fn: (_, data) => data,
  target: addProductToFavoriteFx,
})

sample({
  clock: loadFavoriteItems,
  source: $favorites,
  fn: (_, data) => data,
  target: getFavoriteItemsFx,
})

sample({
  clock: addProductsFromLSToFavorites,
  source: $favorites,
  fn: (_, data) => data,
  target: addProductsFromLSToFavoritesFx,
})

sample({
  clock: deleteProductFromFavorites,
  source: $favorites,
  fn: (_, data) => data,
  target: deleteFavoriteItemFx,
})
