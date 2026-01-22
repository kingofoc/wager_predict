import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import { Tip } from "@/models/tips";

export async function POST(request: NextRequest) {
 await connectDb();

 const { country, league, home, away, homeScore, awayScore, expertTip, matchDate } = await request.json();

 if(!country || !league || !home || !away || !homeScore || !awayScore || !expertTip || !matchDate) {
  return NextResponse.json({ error: "Please input teams" }, { status: 400 });
 }

 const expertTipArray = typeof expertTip === "string"
  ? expertTip.split(",").map((tip:string) => tip.trim())
  : []

 const newTip = await Tip.create({
  country,
  league,
  home,
  away,
  homeScore,
  awayScore,
  expertTip: expertTipArray,
  matchDate: new Date(matchDate)
 })

 return NextResponse.json({ success: true, Tip: newTip }, { status: 201 })
}
