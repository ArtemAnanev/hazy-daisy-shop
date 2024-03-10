import { useUnit } from 'effector-react'
import { useMemo, useState } from 'react'
import { $currentProduct } from '@/context/goods'

export const useCartAction = (isSizeTable = false) => {
  const product = useUnit($currentProduct)
  const [selectedSize, setSelectedSize] = useState('')
  const [addToCartSpinner, setAddToCartSpinner] = useState(false)
  const [updateCountSpinner] = useState(false)


  // const allCurrentCartItemCount = useMemo(
  //   () => currentCartItems.reduce((a, { count }) => a + +count, 0),
  //   [currentCartItems]
  // )

  return {
    product,
    setSelectedSize,
    selectedSize,
    addToCartSpinner,
    setAddToCartSpinner,
    updateCountSpinner,
    // allCurrentCartItemCount,
  }
}
