import razorpay from "razorpay";
import config from "./config.js";

const instance = new razorpay({
  key_id: config.rozarpay_key,
  key_secret: config.rozarpay_secret,
});

export default instance;
