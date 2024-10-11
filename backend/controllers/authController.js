const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require('bcrypt');
const { createToken } = require("../utils/tokenCreate");


const authController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await adminModel.findOne({ email: email });

    if (admin) {
const matchPassword=await bcrypt.compare(password,admin.password)

if(matchPassword){

  const token=await createToken({
    id:admin._id,
    role:admin.role
  })

  console.log(token); 
  res.cookie("accessToken",token,{
    expires:new Date(Date.now()+7*24*60*60*1000)
  })
   responseReturn(res, 200, { message: "Login Successful!" });


}else{
  responseReturn(res, 404, { error: "Wrong password!" })

}


    } else {
      responseReturn(res, 404, { error: "Email not Found!" });
    }
  } catch (error) {
    responseReturn(res, 500, { error: error.message });
  }
  // res.send("Done");
};

module.exports = authController;
