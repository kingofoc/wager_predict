import { model, Schema, models } from "mongoose";

const TipSchema = new Schema({
 country: {
  type: String,
  required: true
 },
 league: {
  type: String,
  required: true
 },
 home: {
  type: String,
  required: true
 },
 away: {
  type: String,
  required: true
 },
 homeScore: {
  type: Number,
  required: true
 },
 awayScore: {
  type: Number,
  required: true
 },
 expertTip: {
  type: [String],
  required: true
 },
 rHomeScore: {
  type: Number,
 },
 rAwayScore: {
  type: Number
 },
 matchDate: {
  type: Date,
  required: true
 },
}
);

TipSchema.index(
 { matchDate: 1 },
 { expireAfterSeconds: 60 * 60 * 24 * 3 }
)

export const Tip = models.Tip || model('Tip', TipSchema);
