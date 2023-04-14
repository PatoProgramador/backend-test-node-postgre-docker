const express = require('express');
const morgan = require('morgan');
const sequelize = require('./config/database');


const PORT = process.env.EXTERNAL_PORT || 1234;


const app = express();

// setting cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
});
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use("/empleados", require('./routes/employeeRoute'));
app.use("/departamentos", require('./routes/departmentRoute'));

async function main() {
    try {
        await sequelize.sync({force: false});
        console.log("Connection with database established successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.log("Unable to connect to the database: ", error);
    }
};

main();