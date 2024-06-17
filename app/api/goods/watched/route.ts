import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { getDbAndReqBody } from "@/lib/utils/api-routes"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)
    const productsPayload : {_id: string; category: string }[] = reqBody.payload

    if (!productsPayload) {
      return NextResponse.json({
        message: 'Payload field required',
        status: 404,
      })
    }

    const getWatchedProducts = async (category: string) => {
      const goods= await db
        .collection(category)
        .find({
          _id: {$in: productsPayload.map(({ _id })=> new ObjectId(_id))},
        })
        .toArray()
      return goods
    }

    const [clothes, accessories] = await Promise.allSettled([
      getWatchedProducts('clothes'),
      getWatchedProducts('accessories')
    ])
    if (
      clothes.status !== 'fulfilled' ||
      accessories.status !== 'fulfilled'
    ){
      return NextResponse.json({
        count: 0,
        items: [],
      })
    }

   const allGoods = [
     ...clothes.value,
     ...accessories.value
   ]

    return NextResponse.json({
      count: allGoods.length,
      items: allGoods,
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
