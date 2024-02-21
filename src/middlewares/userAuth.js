const userAuth = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success: false,
            message: "Please provide email and password",
            err: "required field wer not provided",
            data: {}
        })
    }
next();
}
module.exports= {userAuth}

