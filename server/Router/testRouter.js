const router = require("express").Router();

const ServiceId = "VA6aa4b18b2b23d61292bf509f28ac218f";
const accountSid = "ACf5432f3b6ff0e5cdaaddae99b7e3af37";
const authToken = "cb408bcf27a32418a98c1c8b44d28500";
const client  = require("twilio")(accountSid,authToken);



router.post("/mobile", (req,res) => {
    const { otp } = 657658;
   client.verify
   .v2.services(ServiceId)
   .verifications.create({
      to : `+91${req.body.phoneNumber}`,
      body: `Your OTP is: ${otp}`,
      channel : "sms"
   })
   .then((resp) => (
    console.log("response", resp),
    res.status(200).json({resp})
   ))
});

router.post("/otp",(req,res) => {
    const { phoneNumber } = req.body;
    const {otp} = req.body;
    console.log("otp",otp)
    client.verify
    .v2.services(ServiceId)
    .verificationChecks.create({
        to : `+91${phoneNumber}`,
        code : otp
})
.then(res => {
    console.log("otp res" ,res)
})
})

module.exports = router;