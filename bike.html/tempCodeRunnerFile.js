const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Form Data Handle Karne Ka Route
app.post("/book", (req, res) => {
    const {
        name,
        email,
        phone,
        color,
        address
    } = req.body;

    console.log("New Booking Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Color:", color);
    console.log("Address:", address);

    res.send(`
        <h1>Thank You ${name}!</h1>
        <p>Your booking has been received successfully.</p>
        <a href="/">Go Back</a>
    `);
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
