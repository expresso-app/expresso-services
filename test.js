const config = require("./config");
const { EmailService } = require("./index");

const options = {
    from: `Expresso App <${config.email_address}>`,
    to: "expressoapp.2020@gmail.com",
    subject: "test email",
    text: `Test email \n Environment: ${process.env.NODE_ENV}`,
    html: "<p>hello form test email</p>"
};

const emailSvc = new EmailService(config.email_host, config.email_address, config.email_password);
emailSvc.sendEmail(options);

console.log("FINISH!");
