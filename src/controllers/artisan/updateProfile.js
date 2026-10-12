import Profile from "../../models/artisanProfile.js";

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "You must provide an id parameter",
      });
    }
    const profile = await Profile.findById({ _id: id });

    if (!profile) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Artisan profile not found or invalid id provided",
      });
    }

    const {
      professional_headline,
      profession,
      experience_years,
      phone_number,
      starting_price,
      residential_address,
      office_address,
    } = req.body;

    // Update the profile fields
    profile.professional_headline =
      professional_headline || profile.professional_headline;
    profile.profession = profession || profile.profession;
    profile.experience_years = experience_years || profile.experience_years;
    profile.phone_number = phone_number || profile.phone_number;
    profile.starting_price = starting_price || profile.starting_price;
    profile.residential_address =
      residential_address || profile.residential_address;
    profile.office_address = office_address || profile.office_address;

    // Save the updated profile
    await profile.save();

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Artisan profile updated successfully",
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
