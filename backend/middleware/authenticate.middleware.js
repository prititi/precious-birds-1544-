const jwt= require("jsonwebtoken")
require("dotenv").config
const authentication= (req,res, next)=>{
    const token= req.headers.authorization
    if(token){
        jwt.verify(token, "masai", (err, decoded)=>{
            if(decoded){
                req.body.userID= decoded.userID
                // const userID=decoded.userID
                // req.body.userID=userID
                next()
                
            }else{
                res.send({"msg":"Please login"})
            }
        })
    }else{
        res.send({"msg":"Please login"})
    }
}

module.exports={
    authentication
}