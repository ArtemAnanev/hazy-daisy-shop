import { capitalizeFirstLetter } from "@/lib/utils/common"
import { useLang } from "@/hooks/useLang"
import { useUnit } from "effector-react"
import { loadProductsByFilterFx } from "@/context/goods"
import { $products } from "@/context/goods/state"

export const useProductsByCollection = (collection: string) => {
  const { lang, translations } = useLang()
  const spinner = useUnit(loadProductsByFilterFx.pending)
  const products = useUnit($products)

  const langText = translations[lang].product.collection_goods
  const capitalizedCollection = capitalizeFirstLetter(collection)
  const title =
    lang === 'ru'
      ? `${langText} <<${capitalizedCollection}>>`
      : [
        langText.slice(0, 17),
        ` <<${capitalizedCollection}>>`,
        langText.slice(17),
      ].join('')

  return {title, capitalizedCollection, products, spinner}
}
