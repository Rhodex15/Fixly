import Profile from "../../models/artisanProfile.js";

export const profile = async (req, res) => {
  try {
    const {
      user_id,
      professional_headline,
      profession,
      experience_years,
      rating,
      phone_number,
      starting_price,
      residential_address,
      office_address,
    } = req.body;

    const newProfile = await Profile.create({
      user_id,
      professional_headline,
      profession,
      experience_years,
      rating,
      phone_number,
      starting_price,
      residential_address,
      office_address,
    });

    return res.status(201).json({
      statusCode: 201,
      success: true,
      message: "Profile created Successfully",
      data: {
        id: newProfile._id,
        user_id: newProfile.user_id,
        professional_headline: newProfile.professional_headline,
        profession: newProfile.profession,
        experience_years: newProfile.experience_years,
        rating: newProfile.rating,
        phone_number: newProfile.phone_number,
        starting_price: newProfile.starting_price,
        residential_address: newProfile.residential_address,
        office_address: newProfile.office_address,
      },
    });
  } catch (error) {
    console.error(`Profile error: ${error}`);

    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};