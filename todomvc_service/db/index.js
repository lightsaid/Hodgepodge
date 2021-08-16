
const Database = require('better-sqlite3');
const db = new Database('./todo.db', { verbose: console.log });
module.exports = db

