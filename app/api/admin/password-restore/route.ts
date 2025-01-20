import { getDbAndReqBody } from "@/lib/utils/api-routes";
import clientPromise from "../../../../lib/mongodb";
import { sendMail } from "@/service/mailService";
import { NextResponse } from "next/server";
import { corsHeaders } from "@/constants/corsHeaders";

export async function POST(req: Request) {
  try {
    const { reqBody } = await getDbAndReqBody(clientPromise, req);

    await sendMail(
      "Hazy daisy",
      reqBody.email,
      `Ссылка для сброса пароля: ${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/password-restore`,
    );

    return NextResponse.json({ status: 200 }, corsHeaders);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { ...corsHeaders, status: 200 });
}
