'use client'
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs"
import { useLang } from "@/hooks/useLang"
import OrderTitle from "@/components/modules/OrderPage/OrderTitle"
import OrderInfoBlock from "@/components/modules/OrderInfoBlock/OrderInfoBlock"
import { useGoodsByAuth } from "@/hooks/useGoodsByAuth"
import { $cart, $cartFromLs } from "@/context/cart/state"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import OrderCartItem from "@/components/modules/OrderPage/OrderCartItem"
import styles from "@/styles/order/index.module.scss"
import OrderDelivery from "@/components/modules/OrderPage/OrderDelivery"

const OrderPage = () => {
  const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs('order')
  const { lang, translations } = useLang()
  const currentCartByAuth = useGoodsByAuth($cart, $cartFromLs)
  const isMedia1220 = useMediaQuery(1220)


  return (
    <main>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      <section className={styles.order}>
        <div>
          <h1 className={styles.order__title}>
            {translations[lang].breadcrumbs.order}
          </h1>
          <div className={styles.order__inner}>
            <div className={styles.order__inner__left}>
              <ul className={`list-reset ${styles.order__list}`}>
                <li className={styles.order__list__item}>
                  <OrderTitle
                    orderNumber='1'
                    text={translations[lang].order.order}
                  />
                  {isMedia1220 ? (
                    <ul className={`list-reset ${styles.order__list__item__list}`}>
                      {currentCartByAuth.map((item, i)=> (
                        <OrderCartItem
                          key={item._id || item.clientId}
                          item={item}
                          position={i + 1}
                        />
                      ))}
                    </ul>
                    ) :(
                    <table className={styles.order__list__item__table}>
                      <thead>
                        <tr>
                          <th>{translations[lang].order.name}</th>
                          <th>{translations[lang].order.size}</th>
                          <th>{translations[lang].order.color}</th>
                          <th>{translations[lang].order.count}</th>
                          <th>{translations[lang].order.sum}</th>
                        </tr>
                      </thead>
                      <tbody>
                      {currentCartByAuth.map((item, i)=> (
                        <OrderCartItem
                          key={item._id || item.clientId}
                          item={item}
                          position={i + 1}
                        />
                      ))}
                      </tbody>
                    </table>
                  )}
                </li>
                <li className={styles.order__inner__right__order}>
                  <OrderDelivery  />
                </li>
              </ul>
            </div>
            <div className={styles.order__inner__right}>
              <div className={styles.order__inner__right__order}>
                <OrderInfoBlock isOrderPage/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OrderPage
