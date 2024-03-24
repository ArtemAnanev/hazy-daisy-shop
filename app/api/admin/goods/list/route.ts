import { getDbAndReqBody } from "@/lib/utils/api-routes"
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"
import { corsHeaders } from "@/constants/corsHeaders"

export async function GET(req: Request) {
  try {
    const {db} = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const rangeParams = url.searchParams.get('range') || JSON.stringify([0,4])
    const sortParams = url.searchParams.get('sort') || JSON.stringify(['name','ASC'])
    const range = JSON.parse(rangeParams)
    const sort = JSON.parse(sortParams)

    const getFilteredCollection = async (collection: string) => {
      const goods = await db
        .collection(collection)
        .find()
        .sort({ [sort[0]==='id'?'_id': sort[0]]: sort[1] ===  'ASC' ? 1 : -1 })
        .toArray()
      return goods
    }

    const [clothes, accessories] = await Promise.allSettled([
      getFilteredCollection('clothes'),
      // getFilteredCollection('accessories')
    ])
    if (clothes.status !== 'fulfilled'
      // || accessories.status !== 'fulfilled'
    ) {
      return NextResponse.json({count: 0, items: []}, corsHeaders)
    }

    const allGoods = [...clothes.value,
      // ...accessories.value
    ]

    return NextResponse.json({
      count: allGoods.length,
      items: allGoods
        .slice(range[0], range[1])
        .map((item)=> ({...item, id: item._id}))
    }, corsHeaders)
  } catch (error) {
    throw new Error((error as Error).message )
  }
}
