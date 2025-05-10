require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const verifyUser = (req, res, next)=>{
    console.log(req.body)
    console.log(req.header("auth-token"))
    const isVerify = jwt.verify(req.header("auth-token"),secretKey)
    console.log(isVerify)
    if(!isVerify){
        return res.status(401).send({
            success:false,
            message:"unauthorized user"
        })
    }
    req.user = isVerify.id
    next();
}

module.exports = verifyUser