import { useUnit } from "effector-react"
import { $newProducts } from "@/context/goods/state"
import { getNewProductsFx } from "@/api/main-page"
import { useLang } from "@/hooks/useLang"
import MainPageSection from "@/components/modules/MainPage/MainPageSection"

const NewGoods = () => {
  const goods = useUnit($newProducts)
  const spinner = useUnit(getNewProductsFx.pending)
  const {lang, translations} = useLang()

  return (
    <MainPageSection
      title={translations[lang].main_page.new_title}
      goods={goods}
      spinner={spinner}
    />
  )
}

export default NewGoods
