"use client"
import { IProductPageProps } from "@/types/product"
import { useEffect } from "react"
import { $currentProduct, loadOneProduct, loadOneProductFx } from "@/context/goods"
import { useUnit } from "effector-react"
import { notFound } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import styles from "@/styles/product/index.module.scss"
import { usePageTitle } from "@/hooks/usePageTitle"
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import { useLang } from "@/hooks/useLang"

const ProductPage = ({productId, category}: IProductPageProps) => {
  const product = useUnit($currentProduct)
  const productSpinner = useUnit(loadOneProductFx.pending)
  const { breadcrumbs } = useBreadcrumbs(category)
  const { lang, translations } = useLang()
  usePageTitle(category, product.name)

  console.log(product)


  useEffect(()=> {
    loadOneProduct({
      productId,
      category,
    })

  }, [])

  useEffect(()=> {
   if (breadcrumbs){
     const lastCrumb =
       breadcrumbs.children[breadcrumbs.children.length - 1].children[0]

     breadcrumbs.children[
       breadcrumbs.children.length - 2
       ].children[0].textContent = (
         translations[lang].breadcrumbs as {[index: string]: string}
     )[category]

     lastCrumb.textContent = productSpinner
        ? translations[lang].common.loading
        : product.name
   }
  }, [breadcrumbs, category, lang, product.name, productSpinner, translations])

  if (product?.errorMessage){
    notFound()
  }


  return <div className={styles.product}>
    {productSpinner ? (
        <div className={styles.product__preloader}>
          <FontAwesomeIcon icon={faSpinner} spin size='8x' />
        </div>

      )
      :
    <h1>{product.name}</h1>}
    </div>

}

export default ProductPage
