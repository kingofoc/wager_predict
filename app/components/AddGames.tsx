export default function AddGames() {
 return (
  <>
  <div>
   <h2 className="text-lg font-bold">Add Prediction</h2>
  </div>
   <div className="mt-3">
    <input type="text" name="Country" id="" placeholder="Country" className="rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
    <input type="text" name="League" id="" placeholder="League" className="rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
    <input type="text" name="TeamA" id="" placeholder="Add Home Team" className="rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
    <input type="text" name="TeamB" id="" placeholder="Add Away Team" className="rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
    <input type="text" name="PreScore" id="" placeholder="Predict Home Score" className=" rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
    <input type="text" name="PreScore" id="" placeholder="Predict Away Score" className="rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
    <input type="text" name="ExpertTip" id="" placeholder="Tip" className="rounded-md my-1 p-3 w-full shadow-md outline-gray-400"/>
   </div>

   <div className="mt-5">
    <input type="button" value="Add Game" className="w-full rounded-md p-3 bg-amber-500 font-bold "/>
   </div>
  </>
 )
}
