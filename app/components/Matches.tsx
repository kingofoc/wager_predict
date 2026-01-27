"use client"
import { useState, useEffect } from "react"

type Match = {
 _id: string;
 country: string;
 league: string;
 home: string;
 away: string;
 homeScore: string;
 awayScore: string;
 expertTip: string[];
 rHomeScore?: string;
 rAwayScore?: string;
}

export default function Matches() {
 const [matches, setMatches] = useState<Match[]>([]);

useEffect(() => {
 const fetchMatches = async () => {
   const res = await fetch("/api/addResult", {
     cache: "no-store",
   });
   const data = await res.json();
   setMatches(data.matches);
 };

 fetchMatches();
}, []);

 return (
  <div>
   {matches.map((match) => (
    <div key={match._id}>
     {match.country}

    </div>
   ))}
  </div>
 )
}