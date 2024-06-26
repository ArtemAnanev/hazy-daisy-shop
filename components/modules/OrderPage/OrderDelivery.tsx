/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useUnit } from "effector-react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useLang } from "@/hooks/useLang"
import "@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.css"
import "@tomtom-international/web-sdk-maps/dist/maps.css"
import { $courierTab, $pickupTab } from "@/context/order/state"
import OrderTitle from "./OrderTitle"
import TabControls from "./TabControls"
import { setCourierTab, setMapInstance, setPickupTab } from "@/context/order"
import { basePropsForMotion } from "@/constants/motion"
import { getGeolocationFx, setUserGeolocation } from "@/context/user"
import { $userGeolocation } from "@/context/user/state"
import styles from "@/styles/order/index.module.scss"

const OrderDelivery = () => {
  const { lang, translations } = useLang()
  const pickUpTab = useUnit($pickupTab)
  const courierTab = useUnit($courierTab)
  const [shouldLoadMap, setShouldLoadMap] = useState(false)
  const userGeolocation = useUnit($userGeolocation)
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>

  const handlePickupTab = () => {
    if (pickUpTab) {
      return
    }
    setPickupTab(true)
    setCourierTab(false)
    handleLoadMap()
  }

  const handleCourierTab = () => {
    if (courierTab) {
      return
    }
    setPickupTab(false)
    setCourierTab(true)
  }

  useEffect(()=> {
    getUserGeolocation()
  }, [])

  useEffect(()=> {
    if (shouldLoadMap){
      handleLoadMap()
    }
  }, [shouldLoadMap])


  const getUserGeolocation = () => {
    const success = async (pos: GeolocationPosition)=> {
      const {latitude, longitude} = pos.coords

      const result = await getGeolocationFx({lat: latitude, lon: longitude})

      if(!result){
        return
      }

      setUserGeolocation(result.data)
      setShouldLoadMap(true)
    }

    const error = async (error: GeolocationPositionError) => {
      setShouldLoadMap(true)
      toast.error(`${error.code} ${error.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  const handleLoadMap = async (
    initialSearchValue = '',
    initialPosition = {
    lat: 55.755819,
    lng: 37.617644,
  }, withMarker =  false
  ) => {
    const ttMaps = await import(`@tomtom-international/web-sdk-maps`)

    const map = ttMaps.map({
      key: process.env.NEXT_PUBLIC_TOMTOM_API_KEY as string,
      container: mapRef.current,
      center: initialPosition,
      zoom: 10,
    })
    setMapInstance(map)
    if (userGeolocation?.features && !withMarker) {
      map.setCenter([
        userGeolocation?.features[0].properties.lon,
        userGeolocation?.features[0].properties.lat,
     ]).zoomTo(10)
    }
  }

  return (
    <>
      <OrderTitle orderNumber='2' text={translations[lang].order.delivery} />
      <div className={styles.order__list__item__delivery}>
        <TabControls
          handleTab1={handlePickupTab}
          handleTab2={handleCourierTab}
          tab1Active={pickUpTab}
          tab2Active={courierTab}
          tab1Text={translations[lang].order.pickup_free}
          tab2Text={translations[lang].order.courier_delivery}
        />
        {pickUpTab && (
          <motion.div
            className={styles.order__list__item__delivery__pickup}
            {...basePropsForMotion}
          >
            <div
              className={styles.order__list__item__delivery__map}
              ref={mapRef}
            />
          </motion.div>
        )}
        {courierTab && (
          <motion.div
            {...basePropsForMotion}
          >
           <h3>TAB 2</h3>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default OrderDelivery
