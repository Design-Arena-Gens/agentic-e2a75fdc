import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.email || !body?.name || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Simulate async processing time
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ success: true });
}
