import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import { Tip } from "@/models/tips";

export async function GET() {
 await connectDb();

 const matches = await Tip.find({})
  .sort({ created: -1 })
  .lean()

 return NextResponse.json({
  matches,
  success: true 
 })
}
