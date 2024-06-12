import styles from "@/styles/product/index.module.scss"
import ProductImages from "@/components/modules/ProductPage/ProductImages"
import { useLang } from "@/hooks/useLang"
import { useUnit } from "effector-react"
import { $currentProduct } from "@/context/goods"
import { useProductImages } from "@/hooks/useProductImages"

const ProductPageContent = () => {
  const product = useUnit($currentProduct)
  const { lang, translations } = useLang()
  const  images = useProductImages(product)

  return (
    <div className={styles.product__top}>
      <ProductImages images={images}/>

    </div>
  )
}

export default ProductPageContent
