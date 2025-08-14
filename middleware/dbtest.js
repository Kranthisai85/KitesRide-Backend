const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'premium76.web-hosting.com',
  user: 'kitelkzb_admin',
  password: 'Kitesride@007',
  database: 'kitelkzb_db',
  port: 21098,
  connectionLimit: 100,
  charset: 'utf8mb4'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Connection failed:', err.message);
    } else {
        console.log('✅ Connected to MySQL successfully!');
        connection.release();
    }
    pool.end();
});
