import { IProductLabelProps } from "@/types/modules"
import { useLang } from "@/hooks/useLang"

import styles from "@/styles/product-list-item/index.module.scss"


const ProductLabel = ({ isNew, isBestseller }: IProductLabelProps) => {
  const {lang, translation} = useLang()

  const bestsellerLabel = (
    <span className={`${styles.list__item__label} ${styles.list__item__bestseller}`}>
      {translation[lang].main_page.is_bestseller}
    </span>
  )

  const newLabel = (
    <span className={`${styles.list__item__label} ${styles.list__item__new}`}>
      {translation[lang].main_page.is_new}
    </span>
  )

  const allLabel = (
    <div className={styles.list__item__label__all}>
      {newLabel}
      {bestsellerLabel}
    </div>
  )

  if (isNew && isBestseller) {
    return allLabel
  }

  if (isBestseller){
    return bestsellerLabel
  }

  return newLabel
}


export default ProductLabel
