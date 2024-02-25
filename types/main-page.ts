import { IProduct } from "@/types/common"
import { StaticImageData } from "next/image"

export interface IHeroSlide {
  id?: number
  image: StaticImageData
  title: string
}

export type IHeroSlideTooltip = IHeroSlide

export interface IMainPageSectionProps {
  title: string
  goods: IProduct[]
  spinner: boolean
}
