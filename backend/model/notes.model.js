const mongoose= require("mongoose")

const noteSchema= mongoose.Schema({
    title: String,
    body: String,
    userID: String,
    notes:String
})

const noteModel= mongoose.model("note",noteSchema)

module.exports={
    noteModel
}