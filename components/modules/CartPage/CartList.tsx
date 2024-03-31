import { AnimatePresence, motion } from "framer-motion"
import {basePropsForMotion} from "@/constants/motion"
import styles from "@/styles/cart-page/index.module.scss"
import CartListItem from "@/components/modules/CartPage/CartListItem"
import { useGoodsByAuth } from "@/hooks/useGoodsByAuth"
import { $cart, $cartFromLs } from "@/context/cart"

const CartList = () => {
  const currentCartByAuth = useGoodsByAuth($cart, $cartFromLs)
  return(
    <>
      <AnimatePresence>
        {currentCartByAuth.map((item)=> (
          <motion.li
            key={item._id || item.clientId}
            {...basePropsForMotion}
            className={styles.cart__list__item}
          >
           <CartListItem item={item}/>
          </motion.li>
        ))}
      </AnimatePresence>
    </>
  )
}

export default CartList
