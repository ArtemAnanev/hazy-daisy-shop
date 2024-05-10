/* eslint-disable indent */
'use client'
import ReactPaginate from "react-paginate"
import { useEffect } from 'react'
import { IProductsPage } from "@/types/catalog"
import { useProductFilters } from "@/hooks/useProductFilters"
import { motion } from "framer-motion"
import styles from '@/styles/catalog/index.module.scss'
import skeletonStyles from "@/styles/skeleton/index.module.scss"
import { basePropsForMotion } from "@/constants/motion"
import ProductsListItem from "@/components/modules/ProductsListItem/ProductListItem"


const ProductsPage = ({searchParams, pageName}: IProductsPage) => {
  const {
    products,
    productsSpinner,
    paginationProps,
    handlePageChange, } =
    useProductFilters(searchParams, pageName, pageName === 'catalog')

  console.log(products)

  return (
    <>
      {productsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton}
          style={{marginBottom: 60}}
        >
          {Array.from(new Array(12)).map((_, i)=> (
            <li key={i} className={skeletonStyles.skeleton__item}>
              <div className={skeletonStyles.skeleton__item__light} />
            </li>
          ))}
        </motion.ul>
      )}
      {!productsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton}>
          {(products.items || []).map((item)=> (
            <ProductsListItem
              key={item._id}
              item={item} />
          ))}
        </motion.ul>
        )}
      <div className={styles.catalog__bottom}>
        <ReactPaginate
          {...paginationProps}
          // nextLabel={<></>}
          // previousLabel={<></>}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default ProductsPage
