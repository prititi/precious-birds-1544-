const mongoose= require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoose_url)

module.exports={
    connection
}