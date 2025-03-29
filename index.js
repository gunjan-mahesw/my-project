const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "anil sindhu",
            age: 29
        },
        {
            id: 2,
            name: "bruce wayne",
            age: 29
        }
    ]); 
});

app.listen(5500, () => {
    console.log("server is running on port 5500");
});
