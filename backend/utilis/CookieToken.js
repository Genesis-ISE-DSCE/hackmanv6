const cookieToken=(admin,res)=>{
    const token = admin.getJwtToken()
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };
    admin.password =undefined;
    res.status(200).cookie("token",token,options).json({
        sucess:true,
        token,
        admin,
    })
}

module.exports = cookieToken;
