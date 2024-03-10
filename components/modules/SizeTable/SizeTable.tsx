import { useState } from "react"
import { useCartAction } from "@/hooks/useCartAction"
import { useUnit } from "effector-react"
import { $sizeTableSizes } from "@/context/sizeTable"

import styles from '@/styles/size-table/index.module.scss'


const SizeTable = () => {
  const [sSize, setSSize] = useState(false)
  const [mSize, setMSize] = useState(false)
  const [lSize, setLSize] = useState(false)
  const [xlSize, setXLSize] = useState(false)
  const [xxlSize, setXXLSize] = useState(false)
  const [selectedSize, setSelectedSize, product] = useCartAction(true)
  const productSizes = useUnit($sizeTableSizes)



  const handleSelectSSize = () => setSelectedSize('s')

  const handleSelectLSize = () => setSelectedSize('l')

  const handleSelectMSize = () => setSelectedSize('m')

  const handleSelectXLSize = () => setSelectedSize('xl')

  const handleSelectXXLSize = () => setSelectedSize('xxl')

  const isSizeSelected = (size: string) => selectedSize === size


  const dressSizes = [
    {
      id: 1,
      russianSize: '44-46',
      manufacturerSize: 'S',
      bust: '78-82',
      waist: '58-62',
      hipGirth: '86-90',
      selectHandler: handleSelectSSize,
      isSelected: isSizeSelected('s'),
      isAvailable: productSizes.sizes.s,
      // isInFavorites: checkInFavorites('s'),
      isInFavorites: false,
    },
    {
      id: 2,
      russianSize: '48-50',
      manufacturerSize: 'M',
      bust: '82-86',
      waist: '62-66',
      hipGirth: '90-94',
      selectHandler: handleSelectMSize,
      isSelected: isSizeSelected('m'),
      isAvailable: productSizes.sizes.m,
      // isInFavorites: checkInFavorites('m'),
      isInFavorites: false,
    },
    {
      id: 3,
      russianSize: '50',
      manufacturerSize: 'L',
      bust: '86-90',
      waist: '66-70',
      hipGirth: '94-98',
      selectHandler: handleSelectLSize,
      isSelected: isSizeSelected('l'),
      isAvailable: productSizes.sizes.l,
      // isInFavorites: checkInFavorites('l'),
      isInFavorites: false
    },
    {
      id: 4,
      russianSize: '52-54',
      manufacturerSize: 'XL',
      bust: '90-94',
      waist: '70-74',
      hipGirth: '98-102',
      selectHandler: handleSelectXLSize,
      isSelected: isSizeSelected('xl'),
      isAvailable: productSizes.sizes.xl,
      // isInFavorites: checkInFavorites('xl'),
      isInFavorites: false
    },
    {
      id: 5,
      russianSize: '56',
      manufacturerSize: 'XXL',
      bust: '94-98',
      waist: '74-78',
      hipGirth: '102-106',
      selectHandler: handleSelectXXLSize,
      isSelected: isSizeSelected('xxl'),
      isAvailable: productSizes.sizes.xxl,
      // isInFavorites: checkInFavorites('xxl'),
      isInFavorites: false
    },
  ]

  return (
    <div
      className={`${styles.size_table} ${
        isHeaddressType ? styles.size_table_headdress : ''
      }`}
    >

    </div>
  )
}

export default SizeTable
