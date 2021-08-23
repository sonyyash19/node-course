const path = require('path');
const express = require('express');

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views(currently templates directory) location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Yash"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: "Yash"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        name: "Yash"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "50 degress",
        location: "Philadelphia"
    });
})

app.listen(3000, () => {
    console.log('The server has started!');
})