const httpStatus = require("http-status");
const config = require("../config/config");
const sgMail = require("@sendgrid/mail");
const { emailTemplate } = require("../utils/emailTemplate");

sgMail.setApiKey(config.sendgrid.apiKey);

const sendEmail = async (req, res, next) => {
  const msg = {
    to: "sayantan.dps@gmail.com",
    from: "hackandsnack@sayantanmondal.com",
    subject: `New message "`,
    text: "Hello",
    html: emailTemplate(),
  };

  try {
    await sgMail.send(msg);
    res.status(httpStatus.OK).send("Email sent");
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error(error.response.body);
    }
    next(error);
  }
};

module.exports = {
  sendEmail,
};
