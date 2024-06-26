import { useUnit } from "effector-react/compat"
import { $bestsellerProducts } from "@/context/goods/state"
import { getBestsellerProductsFx } from '@/context/goods'
import { useLang } from "@/hooks/useLang"
import MainPageSection from "@/components/modules/MainPage/MainPageSection"

const BestsellersGoods = () => {
  const goods = useUnit($bestsellerProducts)
  const spinner = useUnit(getBestsellerProductsFx.pending)
  const { lang, translations } = useLang()

  return (
    <MainPageSection
      title={translations[lang].main_page.bestsellers_title}
      goods={goods}
      spinner={spinner}
      />
  )
}

export default BestsellersGoods
