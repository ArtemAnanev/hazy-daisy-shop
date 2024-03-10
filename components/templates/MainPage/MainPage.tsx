'use client'
import { useGate } from "effector-react"
import Hero from "@/components/modules/MainPage/Hero/Hero"
import Categories from "@/components/modules/MainPage/Categories/Categories"
import { MainPageGate } from "@/context/goods"
import BestsellersGoods from "@/components/modules/MainPage/BestsellersGoods"
import NewGoods from "@/components/modules/MainPage/NewGoods"
import BrandLife from "@/components/modules/MainPage/BrandLife"

const MainPage = () => {
  useGate(MainPageGate)

  return (
    <main>
      <Hero />
      <Categories />
      <NewGoods />
      <BestsellersGoods />
      <BrandLife />
    </main>
  )
}

export default MainPage
