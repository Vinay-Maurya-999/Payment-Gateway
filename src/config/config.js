import dotenv from "dotenv";

dotenv.config();

const _config = {
  rozarpay_key: process.env.ROZARPAY_KEY,
  rozarpay_secret: process.env.ROZARPAY_SECRET,
  mongoose_uri: process.env.MONGOOSE_URL,
};

export default _config;
