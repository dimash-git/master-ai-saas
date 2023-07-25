import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const limit = await getApiLimitCount();
    const isPro = await checkSubscription();

    return new NextResponse(JSON.stringify({ limit, isPro }));
  } catch (error) {
    console.log("USER_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
