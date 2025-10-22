import { NextRequest, NextResponse } from "next/server";
import { getContent, updateContent, type SiteContent } from "@/lib/content";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content, { status: 200 });
}

export async function PUT(request: NextRequest) {
  if (ADMIN_TOKEN && !authorize(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as SiteContent;
  const updated = await updateContent(body);
  return NextResponse.json(updated, { status: 200 });
}

function authorize(request: NextRequest) {
  const header = request.headers.get("authorization");
  if (!header) return false;

  const token = header.replace("Bearer", "").trim();
  return token.length > 0 && token === ADMIN_TOKEN;
}
