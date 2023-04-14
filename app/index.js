const express = require('express');
const morgan = require('morgan');

const PORT = process.env.EXTERNAL_PORT || 1234;

const app = express();

// setting cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
});
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));




try {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
} catch (error) {
    console.log(error);
}
