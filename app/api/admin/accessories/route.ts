import { getFilteredCollection } from "@/lib/utils/admin-routes";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    return getFilteredCollection("accessories", clientPromise, req);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export const dynamic = "force-dynamic";
