import { NextResponse } from "next/server"
import { getDbAndReqBody, getNewAndBestsellerGoods } from "@/lib/utils/api-routes"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  const { db } = await getDbAndReqBody(clientPromise, null)
  return NextResponse.json(await getNewAndBestsellerGoods(db, 'isBestseller'))
}
