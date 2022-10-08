const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: 8080,
  mongoose: {
    url: "mongodb://localhost:27017/snack",
  },
  sendgrid: {
    // apiKey: process.env.SENDGRID_API_KEY,
    apiKey:
      // "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",
  },
};
