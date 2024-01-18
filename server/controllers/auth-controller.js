const User = require("../models/user-model")

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome from Router");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
  
    console.log(req.body);
    const { Name, phone, password } = req.body;

    const userExist = await User.findOne({ phone });

    if(userExist){
      return res.status(400).json({ msg : "Phone Number Already Exist"});
    }

    const userCreated = await User.create({ Name, phone, password});


    res.status(200).json({ msg : userCreated });
  } catch (error) {
    res.status(400).json("internal server error");
  }
};

module.exports = { home, register };
