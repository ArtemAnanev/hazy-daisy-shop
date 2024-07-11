import { sendMail } from "@/service/mailService"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()

    await sendMail('Hazy Daisy Shop', reqBody.email, reqBody.message)

    return NextResponse.json({ status: 200 })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
