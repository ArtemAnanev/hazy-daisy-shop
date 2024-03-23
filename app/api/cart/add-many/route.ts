import { replaceProductsInCollection } from "@/lib/utils/api-routes"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
    return replaceProductsInCollection(clientPromise, req, 'cart')
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
