const dotenv = require('dotenv');
const path = require('path');


dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
    // path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV ,
    HOST : process.env.HOST ,
    PORT : process.env.PORT 
}