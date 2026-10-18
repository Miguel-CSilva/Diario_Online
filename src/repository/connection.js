import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'diario_online',
    password: 'root'
})

console.log('Conectou no mySQL!');

export { con };