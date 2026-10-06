import User from "../../models/users.js";

export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    if (users) {
      return res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Users retrieved Successfully",
        data: users
      });
    }
    return res.status(404).json({
      statusCode: 404,
      success: false,
      message: "No user(s) found.",
    });
  } catch (e) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
      error: e.message,
    });
  }
};
