/*
===Greetings===
Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".

Give the greeting route a param /:name

When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).

===Tip Calculator===
Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.

When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).
*/


const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>');
})

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}</h1>`);
})

app.get('/tip/:total/:percentage', (req, res) => {
    let result = (`${req.params.total * (req.params.percentage * .01)}`);
    res.send(result);
})




app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})