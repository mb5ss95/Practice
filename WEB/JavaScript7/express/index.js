const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors"); // 백엔드가 cors를 허용해줘야함
app.use(cors());

const infos = [
    {
        name : "ji hyuk",
        age : 28
    },
    {
        name : "byung soo",
        age : 28
    },
    {
        name : "sang rae",
        age : 27
    },
    {
        name : "song bin",
        age : 26
    },
    {
        name : "jun ho",
        age : 26
    },
]
app.get("/infos", (req, res) => {
    return res.json(infos);
})


app.get("/infos/names", (req, res) => {
    const names = infos.map((info) => {
        return info.name;
    });
    return res.json(names);
})

app.get("/infos/ages", (req, res) => {
    const ages = infos.map((info) => {
        return info.age;
    });
    return res.json(ages);
})

app.get("/infos/:id", (req, res) => {
    const id = Number(req.params.id);
    if(id > infos.length) return;
    return res.json(infos[id]);
})


app.listen(port, () => {
    console.log(`this server listening on ${port}`)
})