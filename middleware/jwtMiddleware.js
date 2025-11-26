const jwt=require('jsonwebtoken')
const jwtMiddleware=(req,res,next)=>{
    try{
          // console.log('Middleware');
    // res.status(401).json("Response from middleware")
    // next()
    // console.log(req.headers.authorization.split(" ")[1]); /* accessing authorization token from postman authorization   . using split we accessing token only  */
    const token =req.headers.authorization.split(" ")[1]
    try{
          const user=jwt.verify(token,process.env.SECRETKEY)
    console.log(user);
    req.payload=user.userId
    next()
    // res.status(401).json("failed")
    

    }
    catch(e){
        console.log(e);
        res.status(401).json(e)
        

    }
  

    }
    catch(e){
        console.log(e);
        res.status(400).json(e)
        
    }
  
    
    

    
}
module.exports=jwtMiddleware
