import { useUnit } from "effector-react"
import { $cart, $cartFromLs } from "@/context/cart"
import { $isAuth } from "@/context/auth"

export const useCartByAuth = () => {
  const cart = useUnit($cart)
  const isAuth = useUnit($isAuth)
  const cartFromLs = useUnit($cartFromLs)
  const currentCartByAuth = isAuth ? cart : cartFromLs

  return currentCartByAuth
}
