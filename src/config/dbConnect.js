import mongoose from "mongoose"

mongoose.connect("mongodb+srv://michaelvianas:jc64al57@cluster0.oyzpca8.mongodb.net/alura-node")

let db = mongoose.connection

export default db