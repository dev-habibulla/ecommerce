const authController = (req, res) => {
  console.log("data", req.body);
  res.send("Done");
};


module.exports=authController