import { Db, MongoClient, ObjectId } from 'mongodb'
import { shuffle } from "@/lib/utils/common"
import { NextResponse } from 'next/server'

export const getDbAndReqBody = async (clientPromise: Promise<MongoClient>, req: Request | null) => {
  const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME)
  if (req) {
    const reqBody = await req.json()
    return  { db, reqBody }
  }return { db }
}


export const getNewAndBestsellerGoods = async (db: Db, fieldName: string) => {
  const clothes = await db.collection('clothes').find().toArray()
  return shuffle([
    ...clothes.filter((item)=>item[fieldName]&& Object.values(item.sizes).some((value)=> value)).slice(0,4)
  ])
}
