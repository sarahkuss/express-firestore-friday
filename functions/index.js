import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addAlcohol, deleteAlcohol, getAllAlcohol, updateAlcohol } from "./src/alcohol.js"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/test", (req, res) =>
res.send("It's working"))

app.post("/alcohol", addAlcohol)
app.get("/alcohol", getAllAlcohol)
app.delete("/alcohol/:alcId", deleteAlcohol)
app.patch("/alcohol/:alcId", updateAlcohol)

export const api = functions.https.onRequest(app)
