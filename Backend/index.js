const express = require("express")
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3551;

app.get("/", (req, res) => {
    res.status(200).send({
        "status": 200
    })
})

app.listen(PORT, () => {
    console.log("Server Running On Port:", PORT);
})