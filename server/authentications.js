const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./FOODGO DATABASE.db");

// ===== SIGN UP FUNCTION =====
function signUp(customerId, firstName, lastName, email, password, callback) {
  db.get(`SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ?`, [customerId], (err, row) => {
    if (err) return callback("Error checking customer.");
    if (row) return callback("Customer already exists.");
    
    db.run(
      `INSERT INTO CUSTOMER (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, PASSWORD) 
       VALUES (?, ?, ?, ?, ?)`,
      [customerId, firstName, lastName, email, password],
      function (err) {
        if (err) return callback("Error signing up.");
        callback(null, `Sign Up Successful! Customer ID: ${customerId}`);
      }
    );
  });
}

// ===== SIGN IN FUNCTION =====
function signIn(customerId, password, callback) {
  db.get(
    `SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ? AND PASSWORD = ?`,
    [customerId, password],
    (err, row) => {
      if (err) return callback("Error during sign in.");
      if (row) return callback(null, row);
      callback(null, null); // invalid credentials
    }
  );
}

module.exports = { signUp, signIn };
