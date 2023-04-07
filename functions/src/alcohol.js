import { db } from "./dbConnect.js"

const coll = db.collection("alcohol")

export async function addAlcohol (req, res) {
  const newAlcohol = req.body
  await coll.add(newAlcohol)
  res.status(201).send({message: "Alcohol successfully added"})
}

export async function getAllAlcohol (req, res) {
  const collection = await coll.get()
  const alcohols = collection.docs.map(doc => ({...doc.data(), id: doc.id}))
  res.status(200).send(alcohols)
}

export async function deleteAlcohol(req, res) {
  const { alcId } = req.params
  await coll.doc(alcId).delete()
  res.status(202).send("Alcohol has been deleted")
}

export async function updateAlcohol(req, res) {
  const { alcId } = req.params
  const updatedInfo = req.body
  await coll.doc(alcId).update(updatedInfo)
  res.status(202).send("Alcohol has been updated")
}