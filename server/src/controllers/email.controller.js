const httpStatus = require("http-status");
const config = require("../config/config");
const sgMail = require("@sendgrid/mail");
const { ngoTemplate } = require("../utils/ngoTemplate");

sgMail.setApiKey(config.sendgrid.apiKey);

const sendEmail = async (req, res, next) => {
  const msg = {
    to: req.body.email,
    from: "naveen.209303050@muj.manipal.edu",
    subject: `You have received a donation`,
    text: "Hello",
    html: ngoTemplate(req.body.name),
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
