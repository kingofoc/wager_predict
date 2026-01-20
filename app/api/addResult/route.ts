import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";

export async function POST(request: NextRequest) {
 await connectDb();

 const { teamA, teamB } = await request.json();

 if(!teamA && !teamB) {
  return NextResponse.json({ error: "Please input teams" }, { status: 400 });
 }

 return NextResponse.json({ success: true })
}