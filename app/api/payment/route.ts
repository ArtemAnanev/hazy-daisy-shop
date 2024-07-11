import axios from "axios"
import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { getAuthRouteData } from "@/lib/utils/api-routes"

export async function POST(req: Request) {
  try {
    const { validateTokenResult, reqBody } = await getAuthRouteData(
      clientPromise,
      req
    )

    if (validateTokenResult.status !== 200) {
      return NextResponse.json(validateTokenResult)
    }

    const { data } = await axios({
      method: 'post',
      url: 'https://api.yookassa.ru/v3/payments',
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': Date.now(),
      },
      auth: {
        username: '412402',
        password: 'test_MHX0eGFkz_UrQbzKIr2rjaeGEriaQWRiBne3NkeBdtA',
      },
      data: {
        amount: {
          value: reqBody.amount,
          currency: 'RUB',
        },
        confirmation: {
          type: 'redirect',
          // return_url: 'http://localhost:3000/payment-success',
          return_url: 'https://https://hazy-daisy-shop.vercel.app/',
        },
        capture: true,
        description: reqBody.description,
        metadata: reqBody.metadata,
      },
    })

    return NextResponse.json({ result: data })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
