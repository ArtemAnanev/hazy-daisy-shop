import { createDomain } from "effector"
import { IGetHazyOfficesByCityFx } from "@/types/order"
import toast from "react-hot-toast"
import api from '@/api/apiInstance'

export const order = createDomain()
export const setPickupTab = order.createEvent<boolean>()
export const setCourierTab = order.createEvent<boolean>()
export const setMapInstance = order.createEvent<any>()

export const getHazyOfficesByCity =
  order.createEvent<IGetHazyOfficesByCityFx>()

export const getHazyOfficesByCityFx = order.createEffect(
  async ({city, lang}: IGetHazyOfficesByCityFx)=> {
 try {
   const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY
   const baseUrl = `https://api.geoapify.com/v1/geocode/search?format=json&apiKey=${apiKey}`
   const { data } = await api.get(`${baseUrl}&text=${city}&lang=${lang}`)
   const hazyData = await api.get(`${baseUrl}&text=хэйзи_дэйзи&filter=place:${data.results[0].place_id}`)

   return hazyData.data.results
 } catch (error) {
   toast.error((error as Error).message)
 }
})
