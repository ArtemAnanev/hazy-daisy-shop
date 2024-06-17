import { useEffect } from "react"
import { getWatchedProductFromLS } from "@/lib/utils/common"
import { loadWatchedProducts } from "@/context/goods"
import { useUnit } from "effector-react"
import { $watchedProducts } from "@/context/goods/state"

export const useWatchedProducts = (excludedProductId?: string) => {
  const watchedProducts = useUnit($watchedProducts)

  useEffect(() => {
    const watchedProducts = getWatchedProductFromLS()

    loadWatchedProducts({
      payload: excludedProductId
        ? watchedProducts.filter((item)=> item._id !== excludedProductId)
        : watchedProducts
    })
  },[excludedProductId])

  return {watchedProducts}
}
