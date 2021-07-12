const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/all_data", (req,res)=>{
    console.log("welcome api is working ")
    res.send("api is working...")
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " , PORT);
});

