exports.GenerateOTP = () => {
    var token = Math.floor(Math.random()*100000)
    
    return token;
}

exports.verify = (token,verifiedToken)=>{
    if(token === verifiedToken){
        return true;
    }
    else return false;
}