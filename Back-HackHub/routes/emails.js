var fs = require('fs');
var config = JSON.parse(fs.readFileSync("./../config.json"));

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'supunr.15@cse.mrt.ac.lk',
        pass: config.password
    },
    tls: {
        rejectUnauthorized: false
    }
});
let HelperOptions = {
    from: '"Zupun Ranatunge <supunranaatunge7@gmail.com',
    to: 'supunranatunge7@gmail.com',
    subject: 'Hello HackHub users!!',
    text: 'HackHub mailing is working!!!'

}
transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
        console.log(error)
    }
    console.log("The message was sent")
    console.log(info)
})