const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const { json } = require("body-parser");

const upload = multer({
    storage : multer.diskStorage({
        // 업로드 되는 파일 저장
        destination : (req, file, done) =>{
            done(null, "public/")
        },
        // 업로드 되는 파일의 이름 지정
        filename : (req, file, done) => {
            done(null, file.originalname)
        },
        // 업로드 되는 파일의 사이지 limit
        // limits: {},
    }),
})

const app = express();
const IP = "13.124.153.234";
const PORT = 8080;

app.use(morgan("dev"))
app.use(express.json())
app.use(cors());

app.use("/public", express.static("public"));

//upload
// 파일 업로드는 post요청으로만 해야한다
app.post("/api/file", upload.single("file"), (req, res) => {
    return json({test:"ok"});
})


app.listen(PORT, () => console.log(`listening...${IP} ${PORT} `));