import mongoose from "mongoose";
import jwt from "jsonwebtoken"


const connectDB = (uri) => {
    mongoose.connect(uri, { dbName: "shopApp" })
        .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
        .catch((err) => {
            console.error("Error connecting to DB:", err);
            process.exit(1);
        });
};

    const cookieOption = {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        samesite: "none",
        httpOnly: true,
        secure: true,
    
    }


    const sendToken = (res, user, code, message) => {
        const token = jwt.sign({ _id: user._id },
            // process.env.JWT_SECRET,
            "auth-secret",
        );
    
        return res.status(code)
            .cookie("shop-user-tocken", token, cookieOption)
            .json({
                success: true,
                message,
                user,
            });
    
    }


export{connectDB , sendToken}