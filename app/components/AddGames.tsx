'use client';
import { useState } from "react";

export default function AddGames() {

 const [formData, setFormData] = useState({
  country: "",
  league: "",
  home: "",
  away: "",
  homeScore: "",
  awayScore: "",
  expertTip: "",
  matchDate: ""
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setFormData({
  ...formData,
  [e.target.name]: e.target.value
 });
};

 const handleSubmit = async () => {
  const res = await fetch("/api/addGame", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const data = await res.json();

  if (data.success) {
   alert("Game added successfully");
   setFormData({
    country: "",
    league: "",
    home: "",
    away: "",
    homeScore: "",
    awayScore: "",
    expertTip: "",
    matchDate: ""
   });
  } else {
   alert(data.error);
  }
 };

 return (
  <div>
    <div>
      <p className="px-3 text-lg font-black">Add Prediction</p>
    </div>
   <div className="mt-3">
    <input type="text" value={formData.country} onChange={handleChange} name="country" id="" placeholder="Country" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="text" value={formData.league} onChange={handleChange} name="league" id="" placeholder="League" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="text" value={formData.home} onChange={handleChange} name="home" id="" placeholder="Add Home Team" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="text" value={formData.away} onChange={handleChange} name="away" id="" placeholder="Add Away Team" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="text" value={formData.homeScore} onChange={handleChange} name="homeScore" id="" placeholder="Predict Home Score" className=" rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="text" value={formData.awayScore} onChange={handleChange} name="awayScore" id="" placeholder="Predict Away Score" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="text" value={formData.expertTip} onChange={handleChange} name="expertTip" id="" placeholder="Tip" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
    <input type="datetime-local" value={formData.matchDate} onChange={handleChange} name="matchDate" id="" className="rounded-md my-1 p-3 w-full shadow-md outline-black/80 font-bold"/>
   </div>

   <div className="mt-5">
    <button type="button" onClick={handleSubmit} value="Add Game" className="w-full rounded-md p-3 bg-green-600 font-bold text-white">Add Game</button>
   </div>
  </div>
 )
}
