import { SearchParams } from "@/types/catalog"
import ProductsPage from "@/components/templates/ProductsPage/ProductsPage"

export default function Catalog({searchParams}: {searchParams?: SearchParams}) {
  return <ProductsPage searchParams={searchParams || {}} pageName='catalog' />
}
