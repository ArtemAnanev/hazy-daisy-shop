'use client'
import { useGate } from "effector-react"
import Hero from "@/components/modules/MainPage/Hero/Hero"
import Categories from "@/components/modules/MainPage/Categories/Categories"
import { MainPageGate } from "@/context/goods"
import BestsellersGoods from "@/components/modules/MainPage/BestsellersGoods"

const MainPage = () => {
  useGate(MainPageGate)

  return (
    <main>
      <Hero />
      <Categories />
      <BestsellersGoods />
    </main>
  )
}

export default MainPage
