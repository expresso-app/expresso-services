const EmailService = require("./services/email-service");

const config_dev = {
    host: "smtp.mailtrap.io",
    address: "de0b0c7e7edb11",
    password: "",
}

const config_prod = {
    host: "Gmail",
    address: "expressoapp.2020@gmail.com",
    password: "",
};


const mailOptions = {
    from: "Expresso App <expressoapp.2020@gmail.com>",
    email: "m.khatab.88@gmail.com",
    subject: "test email",
    message: `test email from email service , ${process.env.NODE_ENV}`,
    //html: options.html
};

//const emailSvc_dev = new EmailService(config_dev.host, config_dev.address, config_dev.password);
//emailSvc_dev.sendEmailDev(mailOptions);

//const emailSvc_prod = new EmailService(config_prod.host, config_prod.address, config_prod.password);
//emailSvc_prod.sendEmailProd(mailOptions);

