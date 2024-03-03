import styles from '@/styles/productSubtitle/index.module.scss'
import { useLang } from "@/hooks/useLang"
import { IProductSubtitleProps } from "@/types/element"

const ProductSubtitle = (subtitleClassName, subtitleRectClassName): IProductSubtitleProps => {
  const {lang, translations} = useLang()
  const descriptionPosition = lang === 'ru' ? 5:2

  return (
    <div className={`${styles.product_subtitle__subtitle} ${subtitleClassName}`}>
      <div className={`${styles.product_subtitle__subtitle__rect} ${subtitleRectClassName}`}/>
      <span>
        {translations[lang].main_page.hero_description.slice(0, descriptionPosition)}
      </span>
      <br />
      <span>
        {translations[lang].main_page.hero_description.slice(descriptionPosition)}
      </span>
    </div>
  )
}

export default ProductSubtitle
