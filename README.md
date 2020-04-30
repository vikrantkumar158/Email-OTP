# Email-OTP
Get your email confirmed by OTP. Just a begineer level code.

**Important**
Things to do before running the module
1. Goto models
2. Open otp.js
3. In transporter put your EmailID and Password in user and pass fields respectively
4. Also replace the from field with your EmailID in the mailOptions

How to start???
1. After doing the above, start the node app
2. Now in the browser, goto 127.0.0.1:3000/send
3. Enter your EmailID and click Submit
4. You will receive an OTP on your EmailID
5. If correct OTP entered, then Success message is displayed else Failure
6. You also have an opton to resend the OTP.

**New Features Added**
1. OTP expire time is 2 minutes
2. Available for use in other projects as an API

What to do when using as an API

1. Send the email in req.body to https://email-otp.herokuapp.com/api/send
2. Send the email and otp in req.body to https://email-otp.herokuapp.com/api/verify
3. At the end if response text received is Success then email is validated else failure in validation or otp expired.

**Passoword expiry would be added in further updates**

Test Cases:
1. Wrong OTP
2. Correct OTP
3. Resend OTP
4. Resend OTP, new OTP received but then also enter old OTP
5. Resend OTP, enter new OTP
6. OTP Expired
