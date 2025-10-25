import User from '../Model/User.js'

export const Register = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const newUser = await User.create ({ name, email, password});

    res.status(201).json({
        msg: "Register Sucessfully.",
        user: newUser,
    });
        
    } catch (error) {
        
        console.log("Registration Error:", error);
        res.status(500).json({
            msg: "Server error during registration.",
     });
    };
    
};
