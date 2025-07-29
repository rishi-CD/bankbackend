import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    user: 'pgadmin',
    password: 'password',
    database: 'database',
    port: 42342
});
pool
  .connect()
  .then((client) => {
    console.log('Database connected successfully!');
    client.release();
  })
  .catch((err) => {
    console.error(' Database connection error:', err.stack);
  });

  export default pool


