import { model, Schema, models } from "mongoose";

const tipsSchema = new Schema({
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
  type: String,
  required: true
 }
});

export const tips = models.tips || model('tips', tipsSchema);
