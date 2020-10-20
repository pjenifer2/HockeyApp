const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Hello_World",
    host: "localhost",
    port: 5432,
    database: "hockey"
});

module.exports = pool;