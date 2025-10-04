const generateToken = require("../middleware/generateToken");
const User = require("./user.model");

// user Registration
const userRegistration = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({ username, email, password });
    await user.save();
    res.status(200).send({ message: "Registration successfull!" });
  } catch {
    console.log("Error registering a usr", error);
    res.status(500).send({ message: "Registration failed" });
  }
};

// usr login

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      return res.status(401).send({message: "Invalid password!"})
    }
    const token = await generateToken(user._id)
    res.cookie('token',token,{
        httpOnly: true,
        secure: true,
        sameSite: "None"
    })
    res.status(200).send({
        message: "Login successfully!",
        token,
        user:{
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            profileimage: user.profileImage,
            bio: user.bio,
            profession: user.profession,
            createdAt: user.createdAt
        }
    })
        
  } catch(error) {
    console.error("Error login user", error)
    res.send(500).send({message: "Login failed!"})
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
