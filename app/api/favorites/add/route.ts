import { getAuthRouteData, parseJwt } from "@/lib/utils/api-routes"
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"
import { ObjectId } from "bson"

export async function POST(req: Request) {
  try {
    const { db, validateTokenResult, reqBody, token } = await getAuthRouteData(clientPromise, req)
    if (validateTokenResult.status !== 200) {
      return NextResponse.json(validateTokenResult)
    }
    if (Object.keys(reqBody).length < 4) {
      return NextResponse.json({
        message: 'Not all fields passed',
        status: 404,
      })
    }

    const user = await db
      .collection('users')
      .findOne({email: parseJwt(token as string).email})

    const productItem = await db
      .collection(reqBody.category)
      .findOne({ _id: new ObjectId(reqBody.productId)})
    if (!productItem) {
      return NextResponse.json({
        message: 'Wrong product id',
        status: 404,
      })
    }

    const newFavoriteItem = {
      userId: user?._id,
      productId: productItem._id,
      image: productItem.images[0],
      name: productItem.name,
      size: reqBody.size,
      price: productItem.price,
      vendorCode: productItem.vendorCode,
      category: reqBody.category,
      clientId: reqBody.clientId,
    }

    const { insertedId } = await db
      .collection('favorites')
      .insertOne(newFavoriteItem)
    return NextResponse.json({
      status: 201,
      newFavoriteItem: { _id: insertedId, ...newFavoriteItem },
    })

  } catch (error) {
    throw new Error((error as Error).message)
  }
}
