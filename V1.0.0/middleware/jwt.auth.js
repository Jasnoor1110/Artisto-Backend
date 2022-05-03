const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.auth = (req,res,next)=>{
    const header = req.headers.authorization

    if(!header){
        res.status(401).json({
            status:false,
            err:"Header not found"
        })
    }
    else{
        try {
            const token = header.split(' ')[1];
            if(token){
                jwt.verify(token,process.env.JWT_KEY,function(err,user){
                    if(err){
                        console.log(err);
                        res.status(401).json({
                            status:false,
                            err:err
                        })
                    }
                    else{
                        req.user = user;
                        next()
                    }
                })
            }  
            else{
                req.status(401).json({
                    status:false,
                    err:"User Invalid"
                })
            }
        } catch (error) {
            console.log(err);
            res.status(401).json({
                status:false,
                err:error
            })
        }
    }
}