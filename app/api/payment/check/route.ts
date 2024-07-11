import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()

    const { data } = await axios({
      method: 'get',
      url: `https://api.yookassa.ru/v3/payments/${reqBody.paymentId}`,
      auth: {
        username: '412402',
        password: 'test_MHX0eGFkz_UrQbzKIr2rjaeGEriaQWRiBne3NkeBdtA',
      },
    })

    return NextResponse.json({ result: data })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
