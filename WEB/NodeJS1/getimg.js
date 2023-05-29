const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const app = express();
const IP = "13.124.153.234";
const PORT = 8080;

app.use(morgan("dev"))
app.use(express.json())
app.use(cors());

// public 폴더에 있는 사진을 보여주겠음
app.use("/public", express.static("public"));


app.listen(PORT, () => console.log(`listening...${IP} ${PORT} `));