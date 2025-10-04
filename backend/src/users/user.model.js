const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: String,
  bio: {
    type: String,
    maxlength: 200,
  },
  profession: String,
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


userSchema.pre('save', async function (next){
   const user = this;
   if(!user.isDirectModified('password')) return next();
   const hashedPassword = await bcrypt.hash(user.password, 10);
   user.password = hashedPassword;

   next()

})


// compare password


userSchema.methods.comparePassword = function(candidatePassword){
    return bcrypt.compare(candidatePassword, this.password)
}



const User = model("User", userSchema);
module.exports = User;
