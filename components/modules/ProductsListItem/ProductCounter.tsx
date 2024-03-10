import { IProductCounterProps } from '@/types/goods'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

const ProductCounter = ({
  className,
  count,
  initialCount,
  totalCount,
  setCount,
  increasePrice,
  decreasePrice,
  cartItem,
}: IProductCounterProps) => {
  const [spinner] = useState(false)
  const [disableIncrease, setDisableIncrease] = useState(false)
  const [disableDecrease, setDisableDecrease] = useState(false)
  const currentTotalCount = +cartItem?.inStock || totalCount
  const currentInitialCount = +cartItem?.count || initialCount || 1

  useEffect(() => {
    if (count === 1) {
      setDisableDecrease(true)
    } else {
      setDisableDecrease(false)
    }

    if (count === currentTotalCount) {
      setDisableIncrease(true)
    } else {
      setDisableIncrease(false)
    }
  }, [count, currentTotalCount])

  useEffect(() => {
    setCount(currentInitialCount as number)
  }, [currentInitialCount])


  const increase = async () => {
    increasePrice && increasePrice()
    setDisableDecrease(false)
    setCount(count + 1)
  }

  const decrease = async () => {
    decreasePrice && decreasePrice()
    setDisableIncrease(false)
    setCount(count - 1)
  }

  return (
    <div className={className}>
      <button
        className='btn-reset'
        onClick={decrease}
        disabled={disableDecrease || spinner}
      />
      <span>{spinner ? <FontAwesomeIcon icon={faSpinner} spin /> : count}</span>
      <button
        className='btn-reset'
        onClick={increase}
        disabled={disableIncrease || spinner}
      />
    </div>
  )
}
export default ProductCounter
