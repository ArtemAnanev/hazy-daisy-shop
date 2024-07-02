'use client'
import { IOrderDetailsValues, IHazyAddressData } from '@/types/order'
import {
  getHazyOfficesByCityFx,
  order,
  setCashPaymentTb,
  setChosenCourierAddressData,
  setChosenPickupAddressData,
  setCourierAddressData,
  setCourierTab,
  setMapInstance,
  setOnlinePaymentTb,
  setOrderDetailsValues,
  setPickupTab,
  setShouldLoadHazyData,
  setShouldShowCourierAddressData,
} from '.'
import { setScrollToRequiredBlock } from "@/context/order/index"

export const $hazyDataByCity = order
  .createStore<IHazyAddressData[]>([])
  .on(getHazyOfficesByCityFx.done, (_, { result }) => result)

export const $pickupTab = order
  .createStore<boolean>(true)
  .on(setPickupTab, (_, value) => value)

export const $courierTab = order
  .createStore<boolean>(false)
  .on(setCourierTab, (_, value) => value)

export const $mapInstance = order
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .createStore<any>({})
  .on(setMapInstance, (_, map) => map)

export const $shouldLoadHazyData = order
  .createStore(false)
  .on(setShouldLoadHazyData, (_, value) => value)

export const $chosenPickupAddressData = order
  .createStore<Partial<IHazyAddressData>>({})
  .on(setChosenPickupAddressData, (_, value) => value)

export const $chosenCourierAddressData = order
  .createStore<Partial<IHazyAddressData>>({})
  .on(setChosenCourierAddressData, (_, value) => value)

export const $shouldShowCourierAddressData = order
  .createStore(false)
  .on(setShouldShowCourierAddressData, (_, value) => value)

export const $courierAddressData = order
  .createStore<IHazyAddressData>({} as IHazyAddressData)
  .on(setCourierAddressData, (_, value) => value)

export const $onlinePaymentTab = order
  .createStore<boolean>(true)
  .on(setOnlinePaymentTb, (_, value) => value)

export const $cashPaymentTab = order
  .createStore<boolean>(false)
  .on(setCashPaymentTb, (_, value) => value)

export const $scrollToRequiredBlock = order
  .createStore<boolean>(false)
  .on(setScrollToRequiredBlock, (_, value) => value)

export const $orderDetailsValues = order
  .createStore<IOrderDetailsValues>({} as IOrderDetailsValues)
  .on(setOrderDetailsValues, (_, value) => value)
