const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./FOODGO DATABASE.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');

    // Just show what’s in the database (no creation here)
    db.all("SELECT name, type FROM sqlite_master WHERE type IN ('table','view');", (err, rows) => {
      if (err) {
        console.error('Error fetching tables/views:', err.message);
      } else {
        console.log('Objects in database:');
        rows.forEach((row) => {
          console.log(`${row.type}: ${row.name}`);
        });
      }
    });
  }
});

// ========== CUSTOMER FUNCTIONS ==========

// Add new customer (manual ID, since you don’t want auto increment)
function addCustomer(customerId, firstName, lastName, email, password) {
  db.run(
    `INSERT INTO CUSTOMER (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, PASSWORD) 
     VALUES (?, ?, ?, ?, ?)`,
    [customerId, firstName, lastName, email, password],
    function (err) {
      if (err) {
        console.error('Error inserting customer:', err.message);
      } else {
        console.log(`Customer added with ID: ${customerId}`);
      }
    }
  );
}

// View all customers
function viewCustomers() {
  db.all(`SELECT * FROM CUSTOMER`, [], (err, rows) => {
    if (err) {
      console.error('Error fetching customers:', err.message);
    } else {
      console.log('Customers in database:');
      rows.forEach((row) => {
        console.log(row);
      });
    }
  });
}

// Delete customer by ID
function deleteCustomer(customerId) {
  db.run(`DELETE FROM CUSTOMER WHERE CUSTOMER_ID = ?`, [customerId], function (err) {
    if (err) {
      console.error('Error deleting customer:', err.message);
    } else {
      console.log(`Deleted ${this.changes} customer(s)`);
    }
  });
}

module.exports = {
  db,
  addCustomer,
  viewCustomers,
  deleteCustomer
};

