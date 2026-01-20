import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import { tips } from "@/models/tips"

export async function POST(request: NextRequest) {
 await connectDb();

 const { country, league, home, away, homeScore, awayScore, expertTip } = await request.json();

 if(!country || !league || !home || !away || !homeScore || !awayScore || !expertTip) {
  return NextResponse.json({ error: "Please input teams" }, { status: 400 });
 }

 const newTips = await tips.create({
  country,
  league,
  home,
  away,
  homeScore,
  awayScore,
  expertTip
 })

 return NextResponse.json({ success: true, tips: newTips }, { status: 201 })
}
