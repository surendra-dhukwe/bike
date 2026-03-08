const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static frontend
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/images", express.static(path.join(__dirname, "../images")));


// Test route (server working check)
app.get("/api/test", (req,res)=>{
    res.json({message:"Server working"});
});


// Booking API
app.post("/book", (req, res) => {

    console.log("📩 Received Data:", req.body);

    const { name, email, phone, bike, color, address } = req.body;

    // Validation
    if(!name || !email || !phone || !bike || !color){
        return res.status(400).json({
            success:false,
            message:"Missing required fields"
        });
    }

    const sql = `
    INSERT INTO bookings (name,email,phone,bike,color,address)
    VALUES (?,?,?,?,?,?)
    `;

    db.query(sql,[name,email,phone,bike,color,address],(err,result)=>{

        if(err){
            console.error("❌ DB Error:", err);

            return res.status(500).json({
                success:false,
                message:"Database error"
            });
        }

        console.log("✅ Inserted ID:", result.insertId);

        res.json({
            success:true,
            id: result.insertId,
            name,
            bike,
            color
        });

    });

});


// 404 route
app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:"Route not found"
    });
});


// Server Start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});