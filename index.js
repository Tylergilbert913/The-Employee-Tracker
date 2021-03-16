
const inquirer = require('inquirer');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'top_songsDB'
})
connection.connect(err => {
    if (err) throw err;
    console.log(`We connected! Connected as thread id ${connection.threadId}`);
    searchParams();
    // finished();
});
