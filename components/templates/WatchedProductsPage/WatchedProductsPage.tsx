'use client'
import { useWatchedProducts } from "@/hooks/useWatchedProducts"
import ProductsListItem from "@/components/modules/ProductsListItem/ProductListItem"
import styles from '@/styles/watched-products-page/index.module.scss'
import { useLang } from "@/hooks/useLang"

const WatchedProductsPage = () => {
  const {watchedProducts} = useWatchedProducts()
  const { lang, translations } = useLang()

  return (
    <main>
      <section className={styles.watched_products}>
        <div className='container'>
          <h1 className={`main-title ${styles.watched_products__title}`}>
            {translations[lang].product.watched}
          </h1>
          <ul className={`list-reset ${styles.watched_products__list}`}>
            {(watchedProducts.items || []).map((item)=> (
              <ProductsListItem item={item} key={item._id}/>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default WatchedProductsPage
