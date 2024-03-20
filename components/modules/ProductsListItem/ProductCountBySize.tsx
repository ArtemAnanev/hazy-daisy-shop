import { IProductCountBySizeProps } from '@/types/goods'
import styles from '@/styles/product-count-indicator/index.module.scss'
import { getCartItemCountBySize } from "@/lib/utils/common"

const ProductCountBySize = ({
  products,
  size,
  withCartIcon = true,
}: IProductCountBySizeProps) => (
  <>
    {!!getCartItemCountBySize(products, size) && (
      <span
        className={`${styles.count} ${withCartIcon ? styles.with_icon : ''}`}
      >
        <span>
          {getCartItemCountBySize(products, size)}
        </span>
      </span>
    )}
  </>
)

export default ProductCountBySize
