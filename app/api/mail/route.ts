import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return new NextResponse("Mailing", {
    status: 200,
  })
}
