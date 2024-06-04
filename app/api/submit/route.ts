import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    return NextResponse.json({ name, email, message }, { status: 200 })
  } catch (e: any) {
    return NextResponse.json({e}, {status: 500})
  }
}