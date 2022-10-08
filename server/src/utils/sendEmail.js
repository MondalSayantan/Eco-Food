const { emailTemplate } = require("./emailTemplate");
const config = require("../config/config");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(config.sendgrid.apiKey);

const sendEmail = async (items) => {
  const msg = {
    to: "sayantan.dps@gmail.com",
    from: "naveen.209303050@muj.manipal.edu",
    subject: `Your Updates"`,
    text: "Your Updates",
    html: emailTemplate(items),
  };

  try {
    await sgMail.send(msg);
    console.log("Mail Sent");
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = {
  sendEmail,
};
