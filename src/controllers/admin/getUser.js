import User from "../../models/users.js";
import Profile from "../../models/artisanProfile.js";

export const fetchUser = async (req, res) => {
    try{
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                statusCode:400,
                sucess:false,
                message: "You must provide an id parameter"
            });
        }
        
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({
                statusCode: 404,
                sucess: false,
                message: "User not found",
            });
        }

        const profile = await Profile.findOne({ User_id: id });

        return res.status(200).json({
            statusCode: 200,
            sucess: true,
            message: "User information retrieved successfully",
            data: {
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
                role: user.role,
                artisanProfile:user.role === "artisan" ? profile : "Not an artisan",
            },
        });
    }catch (error) {
        return res.status(500).json({
            statusCode:500,
            suceess:false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};