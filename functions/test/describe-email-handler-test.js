// const chai = require("chai");
// const expect = chai.expect;
// const { verifyResultOk, verifyResultError } = require("helpers/verifiers");
// const NotificationHandler = require("notifications/notification-handler.js");
// const mailer = require("notifications/modes/mailer.js");

// describe("check email and twilio setup", () => {
//   it("should send email", async () => {

//     const sendEmailNotification = (email, setPasswordId) => NotificationHandler.send({
//         context: 'setPassword',
//         modes: [{
//             name: 'email',
//             to: email
//         }],
//         data: {
//             setPasswordId
//         }
//     });

//     const response = await sendEmailNotification('testuser@gmail.com', '196689')
//   }); 
// });
