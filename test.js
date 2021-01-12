const config = require("./config");
const { EmailService } = require("./index");

const options = {
    from: `Expresso App <${config.email.address}>`,
    to: "m.khatab.88@gmail.com",
    subject: "test email",
    html: "<strong style='font-style: italic;'>hello form test email</strong>",
    text: `this is a test email \n Environment: ${process.env.NODE_ENV}`,
};

// console.log(config.email);

const emailSvc = new EmailService(config.email.host, config.email.userName, config.email.password);
emailSvc.sendEmail(options);
