const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { signUp, signIn } = require("./authentications");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ===== SIGNUP ENDPOINT =====
app.post("/signup", (req, res) => {
  const { customerId, firstName, lastName, email, password } = req.body;

  signUp(customerId, firstName, lastName, email, password, (err, successMsg) => {
    if (err) {
      return res.json({ success: false, message: err });
    }
    res.json({ success: true, message: successMsg });
  });
});

// ===== SIGNIN ENDPOINT =====
app.post("/signin", (req, res) => {
  const { customerId, password } = req.body;

  signIn(customerId, password, (err, user) => {
    if (err) {
      return res.json({ success: false, message: err });
    }
    if (user) {
      res.json({ success: true, message: `Welcome ${user.FIRST_NAME} ${user.LAST_NAME}` });
    } else {
      res.json({ success: false, message: "Invalid CUSTOMER_ID or PASSWORD" });
    }
  });
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
