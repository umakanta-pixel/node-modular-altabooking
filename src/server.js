const config =  require('./config/config');
const app = require('./app');

app.listen(config.PORT, config.HOST, () => {
    console.log(`SERVER IS LISTENING ON http://${config.HOST}:${config.PORT}`);
})