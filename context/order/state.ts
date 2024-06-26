import {
  getHazyOfficesByCityFx,
  order,
  setPickupTab,
  setCourierTab,
  setMapInstance
} from '.'
import { IHazyAddressData } from "@/types/order"

export const $hazyDataByCity = order
  .createStore<IHazyAddressData[]>([])
  .on(getHazyOfficesByCityFx.done, (_, {result}) => result)

export const $pickupTab = order
  .createStore<boolean>(true)
  .on(setPickupTab, (_, value) => value)

export const $courierTab = order
  .createStore<boolean>(false)
  .on(setCourierTab, (_, value) => value)

export const $mapInstance = order
  .createStore<any>({})
  .on(setMapInstance, (_, map) => map)
