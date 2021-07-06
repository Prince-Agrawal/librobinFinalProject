var nodemailer = require("nodemailer");

/*
	Here we are configuring our SMTP Server details.
	STMP is mail server which is responsible for sending and recieving email.
*/

let smtpTransport = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'librobinhelp@gmail.com', 
        pass: 'learning@123'
    } 
});

/*------------------SMTP Over-----------------------------*/

module.exports = smtpTransport;
