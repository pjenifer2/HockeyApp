const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes

//get top 20 skaters by position
app.get("/available/:position", async(req,res) => {
    try {

        const { position } = req.params;
        const topSkaters = await pool.query("SELECT * from Skaters where pos like $1 and status = 'available' limit 20;", ['%' +  position + '%']);
        res.json(topSkaters.rows);

    } catch (err) {
        console.log(err.message);
    }
});


//get team of skaters
app.get("/team/:manager", async(req,res) => {
    try {
        
        const { manager } = req.params;
        const teamSkaters = await pool.query("SELECT * from Skaters where fantasy = $1 and status = 'keeper' and year = 2020;", [ manager ]);
        res.json(teamSkaters.rows);

    } catch (err) {
        console.log(err.message);
    }
})

//draft a skater
app.put("/skater/:playername", async(req,res) => {
    try {

        const { playername } = req.params;
        const getStatusOfPlayer = await pool.query("Select rtrim(status) as status from skaters where playername = $1 and year = 2020", [playername]);
        var playerStatus = getStatusOfPlayer.rows[0].status;
        console.log('player status: ' + playerStatus + 'String');
        if (playerStatus == "drafted")   {
            res.json('Player is already drafted');
        } else {
            const draftSkater = await pool.query("Update skaters set status = 'drafted'where playername = $1", [ playername ] );
            res.json('Following player was drafted: ' + playername);
        }

    } catch (err) {
        console.log(err.message);
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000");
});