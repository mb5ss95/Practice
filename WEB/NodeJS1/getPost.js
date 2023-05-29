const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {pool} = require("./db");

const app = express();
const IP = "13.124.153.234";
const PORT = 8080;

app.use(morgan("dev"))
app.use(express.json())
app.use(cors());


app.get("/api/menus/:id", async (req, res) => {
    try{
        return res.json({
            getid : true,
            id : req.params.id,
            name : req.query.name
        })
    }
    catch(error){
        return res.json({getid:false})
    }
})

app.get("/api/menus", async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM menus");
        return res.json(data);
    } catch(error){
        console.log(error);
        return res.json(error);
    }
});

app.post("/api/menus", async (req, res) => {
    try {
        console.log(req.body);

        const data = await pool.query('INSERT INTO menus (menu_name, menu_description, menu_img_link) VALUES(?, ?, ?)',
        [req.body.menu_name, req.body.menu_description, req.body.menu_img_link]);
        return res.json(data);
    }
    catch(e){
        console.log(e);
    }
})

app.listen(PORT, () => console.log(`listening...${IP} ${PORT} `));