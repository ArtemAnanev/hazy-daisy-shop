/* eslint-disable indent */
"use client"
import ReactPaginate from "react-paginate"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useProductFilters } from "@/hooks/useProductFilters"
import { IProductsPage } from "@/types/catalog"
import { basePropsForMotion } from "@/constants/motion"
import { useLang } from "@/hooks/useLang"
import HeadingWithCount from "@/components/elements/HeadingWithCount/HeadingWithCount"
import { setCatalogCategoryOptions } from "@/context/catalog"
import CatalogFilters from "@/components/modules/CatalogFilters/CatalogFilters"
import ProductsListItem from "@/components/modules/ProductsListItem/ProductListItem"
import { IProduct } from "@/types/common"
import WatchedProducts from "@/components/modules/WatchedProducts/WatchedProducts"
import { useWatchedProducts } from "@/hooks/useWatchedProducts"
import styles from "@/styles/catalog/index.module.scss"
import skeletonStyles from "@/styles/skeleton/index.module.scss"

const ProductsPage = ({ searchParams, pageName }: IProductsPage) => {
  const { lang, translations } = useLang()
  const {
    products,
    productsSpinner,
    paginationProps,
    handlePageChange,
    handleApplyFiltersWithCategory,
    handleApplyFiltersWithPrice,
    handleApplyFiltersWithSizes,
    handleApplyFiltersWithColors,
    handleApplyFiltersBySort,
  } = useProductFilters(searchParams, pageName, pageName === 'catalog')
  const { watchedProducts } = useWatchedProducts()


  useEffect(() => {
    switch (pageName) {
    case 'catalog':
      setCatalogCategoryOptions({
        rootCategoryOptions: [
          {
            id: 1,
            title: translations[lang].main_menu.clothes,
            href: '/catalog/clothes',
          },
          {
            id: 2,
            title: translations[lang].main_menu.accessories,
            href: '/catalog/accessories',
          },
        ],
      })
      break
    case 'accessories':
      setCatalogCategoryOptions({
        accessoryCategoryOptions: [
          {
            id: 1,
            title: translations[lang].comparison.bags,
            filterHandler: () => handleApplyFiltersWithCategory('bags'),
          },
          {
            id: 2,
            title: translations[lang].comparison.headdress,
            filterHandler: () => handleApplyFiltersWithCategory('headdress'),
          },
          {
            id: 3,
            title: translations[lang].comparison.umbrella,
            filterHandler: () => handleApplyFiltersWithCategory('umbrella'),
          },
        ],
      })
      break
    case 'clothes':
      setCatalogCategoryOptions({
        clothesCategoryOptions: [
          {
            id: 1,
            title: translations[lang].comparison['t-shirts'],
            filterHandler: () => handleApplyFiltersWithCategory('t-shirts'),
          },
          {
            id: 2,
            title: translations[lang].comparison['long-sleeves'],
            filterHandler: () =>
              handleApplyFiltersWithCategory('long-sleeves'),
          },
          {
            id: 3,
            title: translations[lang].comparison.hoodie,
            filterHandler: () => handleApplyFiltersWithCategory('hoodie'),
          },
          {
            id: 4,
            title: translations[lang].comparison.outerwear,
            filterHandler: () => handleApplyFiltersWithCategory('outerwear'),
          },
        ],
      })
      break
    default:
      break
    }
  }, [lang])

  return (
    <>
      <HeadingWithCount
        count={products.count}
        title={
          (translations[lang].breadcrumbs as { [index: string]: string })[
            pageName
            ]
        }
        spinner={productsSpinner}
      />
      <CatalogFilters
        handleApplyFiltersWithPrice={handleApplyFiltersWithPrice}
        handleApplyFiltersWithSizes={handleApplyFiltersWithSizes}
        handleApplyFiltersWithColors={handleApplyFiltersWithColors}
        handleApplyFiltersBySort={handleApplyFiltersBySort}
      />
      {productsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={skeletonStyles.skeleton}
          style={{ marginBottom: 60 }}
        >
          {Array.from(new Array(12)).map((_, i) => (
            <li key={i} className={skeletonStyles.skeleton__item}>
              <div className={skeletonStyles.skeleton__item__light} />
            </li>
          ))}
        </motion.ul>
      )}
      {!productsSpinner && (
        <motion.ul
          {...basePropsForMotion}
          className={`list-reset ${styles.catalog__list}`}
        >
          {(products.items || []).map((item: IProduct) => (
            <ProductsListItem key={item._id} item={item} />
          ))}
        </motion.ul>
      )}
      {!products.items?.length && !productsSpinner && (
        <div className={styles.catalog__list__empty}>
          {translations[lang].common.nothing_is_found}
        </div>
      )}
      <div className={styles.catalog__bottom}>
        <ReactPaginate
          {...paginationProps}
          nextLabel={<span>{translations[lang].catalog.next_page}</span>}
          previousLabel={
            <span>{translations[lang].catalog.previous_page}</span>
          }
          onPageChange={handlePageChange}
        />
      </div>
      {!!watchedProducts.items?.length && (
        <WatchedProducts watchedProducts={watchedProducts} />
      )}
    </>
  )
}

export default ProductsPage
