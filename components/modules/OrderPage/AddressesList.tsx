import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUnit } from 'effector-react'
import {
  getHazyOfficesByCityFx,
  setChosenPickupAddressData,
  setShouldLoadHazyData,
  setShouldShowCourierAddressData,
} from '@/context/order'
import {
  $chosenPickupAddressData,
  $hazyDataByCity,
  $shouldLoadHazyData,
} from '@/context/order/state'
import { useLang } from '@/hooks/useLang'
import { useTTMap } from '@/hooks/useTTMap'
import { IAddressesListProps, IHazyAddressData } from '@/types/order'
import PickupAddressItem from './PickupAddressItem'
import styles from '@/styles/order/index.module.scss'

const AddressesList = ({
  listClassName,
  handleSelectAddressByMarkers,
}: IAddressesListProps) => {
  const { lang, translations } = useLang()
  const hazyDataByCity = useUnit($hazyDataByCity)
  const chosenPickupAddressData = useUnit($chosenPickupAddressData)
  const shouldLoadHazyData = useUnit($shouldLoadHazyData)
  const { handleSelectAddress } = useTTMap()
  const loadHazyDataSpinner = useUnit(
    getHazyOfficesByCityFx.pending
  )

  const handleChosenAddressData = (data: Partial<IHazyAddressData>) => {
    setShouldLoadHazyData(false)
    setChosenPickupAddressData(data)
    setShouldShowCourierAddressData(false)
  }

  return (
    <>
      {shouldLoadHazyData && (
        <>
          {loadHazyDataSpinner && (
            <span
              className={styles.order__list__item__delivery__inner__spinner}
            >
              <FontAwesomeIcon icon={faSpinner} spin color='#fff' size='2x' />
            </span>
          )}
          {!loadHazyDataSpinner && (
            <ul className={`list-reset ${listClassName}`}>
              {hazyDataByCity?.length ? (
                hazyDataByCity.map((item) => (
                  <PickupAddressItem
                    key={item.place_id}
                    addressItem={item}
                    handleChosenAddressData={handleChosenAddressData}
                    handleSelectAddress={
                      handleSelectAddressByMarkers || handleSelectAddress
                    }
                  />
                ))
              ) : (
                <span>{translations[lang].common.nothing_is_found}</span>
              )}
            </ul>
          )}
        </>
      )}
      {!!chosenPickupAddressData.address_line1 && !shouldLoadHazyData && (
        <div className={styles.order__list__item__delivery__pickup__choose}>
          <span>{chosenPickupAddressData.address_line1}</span>
          <span>
            {chosenPickupAddressData.address_line2},{' '}
            {chosenPickupAddressData.city}
          </span>
        </div>
      )}
    </>
  )
}

export default AddressesList
