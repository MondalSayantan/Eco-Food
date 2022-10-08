const { emailTemplate } = require("./emailTemplate");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(config.sendgrid.apiKey);

// const sendEmail = async (items) => {
//   const msg = {
//     to: "sayantan.dps@gmail.com",
//     from: "dev@sayantanmondal.com",
//     subject: `New message "`,
//     text: "Your Updates",
//     html: emailTemplate(items),
//   };

//   try {
//     await sgMail.send(msg);
//     console.log("Mail Sent")
//   } catch (error) {
//     console.log(error);
//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// };

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
      text: "Updates",
      html: emailTemplate(items),
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendEmail,
};
