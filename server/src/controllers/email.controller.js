const httpStatus = require("http-status");
const config = require("../config/config");
const sgMail = require("@sendgrid/mail");
const { emailTemplate } = require("../utils/emailTemplate");

// sgMail.setApiKey(config.sendgrid.apiKey);

// const sendEmail = async (req, res, next) => {
//   const msg = {
//     to: "sayantan.dps@gmail.com",
//     from: "hackandsnack@sayantanmondal.com",
//     subject: `New message "`,
//     text: "Hello",
//     html: emailTemplate(),
//   };

//   try {
//     await sgMail.send(msg);
//     res.status(httpStatus.OK).send("Email sent");
//   } catch (error) {
//     console.log(error);
//     if (error.response) {
//       console.error(error.response.body);
//     }
//     next(error);
//   }
// };

const nodemailer = require("nodemailer");
const sendEmail = async (items) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: config.mailCreds.user,
        pass: config.mailCreds.pass,
      },
    });

    let info = await transporter.sendMail({
      from: "dev@sayantanmondal.com",
      to: "sayantan.dps@gmail.com",
      subject: "Your Updates",
      text: "Hello",
      html: emailTemplate(items),
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(httpStatus.OK).send("Email sent");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendEmail,
};
