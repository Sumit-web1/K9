const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome from Router");
  } catch (error) {
    console.log(error);
  }
};

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { Name, phone, password } = req.body;

    const userExist = await User.findOne({ phone });

    if (userExist) {
      return res.status(400).json({ msg: "Phone Number Already Exist" });
    }

    const userCreated = await User.create({
      Name,
      phone,
      password,
      registrationDate: formattedDate,
      rank,
      affiliateMembers: affiliateMembers || 0,
      earning,
    });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    res.status(400).json("internal server error");
  }
};

module.exports = { home, register };
