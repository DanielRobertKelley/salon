const app = require('express')();
var server = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'production') {
    app.use(require('express').static(path.join(__dirname, '/../client/build')));
}

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my Backend App'
    });
});

app.get('/about', (req, res) => {
    res.json({
        message: `I am the about route`
    });
});

server.listen(PORT, () => {
    console.log(`Server is starting at Port ${PORT}`);
})