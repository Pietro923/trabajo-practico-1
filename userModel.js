const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email:{
            type: String
        },
        password: {
            type: String
        },
        username: {
            type: String
        },
        age: {
            type: String
        }
    },
    {
        timestamps:true,
        versionKey: false,
    }
)

// uso el metodo model y llamo a user pasandole el schema
const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;