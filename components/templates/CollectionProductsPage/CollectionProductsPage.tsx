'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { basePropsForMotion } from "@/constants/motion"
import ProductsListItem from "@/components/modules/ProductsListItem/ProductListItem"
import { loadProductsByFilter } from "@/context/goods"
import skeletonStyles from "@/styles/skeleton/index.module.scss"
import styles from "@/styles/watched-products-page/index.module.scss"
import { getSearchParamsUrl } from "@/lib/utils/common"
import { allowedCollectionsCategory, allowedCollections } from "@/constants/product"
import {useProductsByCollection} from "@/hooks/useProductsByCollection"
import { notFound } from "next/navigation"

const CollectionProductsPage = () => {
  const [currentCollection, setCurrentCollection] = useState('')
  const {title, spinner, products} = useProductsByCollection(currentCollection)

  useEffect(()=> {
    const urlParams = getSearchParamsUrl()
    const categoryParam = urlParams.get('category')
    const collectionParam = urlParams.get('collection')

    if (
      categoryParam &&
      collectionParam &&
      allowedCollectionsCategory.includes(categoryParam)&&
      allowedCollections.includes(collectionParam)
    ) {
      setCurrentCollection(collectionParam)
      loadProductsByFilter({
        limit: 12,
        offset: 0,
        category: categoryParam,
        additionalParam: urlParams.toString(),
      })
      return
    }
    notFound()
  }, [])


  return (
    <main>
      <section className={styles.watched_products}>
        <div className='container'>
          <h1 className={`site-title ${styles.watched_products__title}`}>
            {title}
          </h1>
          {spinner && (
            <motion.ul
              className={skeletonStyles.skeleton}
              style={{marginBottom: 40}}
              {...basePropsForMotion}
            >
              {Array.from(new Array(12)).map((_, i) => (
                <li key={i} className={skeletonStyles.skeleton__item}>
                  <div className={skeletonStyles.skeleton__item__light} />
                </li>
              ))}
            </motion.ul>
          )}
          {!spinner && (
            <ul className={`list-reset ${styles.watched_products__list}`}>
            {(products.items || []).map((item) => (
              <ProductsListItem item={item} key={item._id} />
            ))}
          </ul>)}
        </div>
      </section>
    </main>
  )
}

export default CollectionProductsPage
