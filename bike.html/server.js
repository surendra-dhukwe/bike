const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/book", (req, res) => {

    const { name, email, phone, bike, color, address } = req.body;

    console.log("New Booking Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Bike:", bike);
    console.log("Color:", color);
    console.log("Address:", address);

    // IMPORTANT: Sirf JSON bhejna hai (Popup ke liye)
    res.json({
        success: true,
        name,
        bike,
        color
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
