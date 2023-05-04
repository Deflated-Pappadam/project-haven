import { Document } from "mongoose"

export interface ITodo extends Document {
  totalMinted: number
}