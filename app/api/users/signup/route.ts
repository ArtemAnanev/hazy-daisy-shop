import { createUserAndGenerateTokens, findUserByEmail, getDbAndReqBody } from "@/lib/utils/api-routes"
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try{
    const {db, reqBody} = await getDbAndReqBody(clientPromise, req)
    const user = await findUserByEmail(db, reqBody.email)
    if (user){
      return NextResponse.json({
        warningMessage: 'Пользовательуже существует',
      })
    }

    const tokens = await createUserAndGenerateTokens(db, reqBody)
    return NextResponse.json(tokens)
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
