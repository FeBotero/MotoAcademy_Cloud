import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URL = process.env.URL ||"mongodb+srv://frpbotero:yMOlnq3l5ZCBur0j@cluster0.my1qgiv.mongodb.net/"
mongoose.set("strictQuery",false)

export default mongoose.connect(URL)

