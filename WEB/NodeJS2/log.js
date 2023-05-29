const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { logger } = require("./utils/winston");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/views"));

// get
app.get("/", async (req, res) => {
  logger.info("info msg");

  return res.json({
    test: "OK",
  });
});

// 로그 출력
// app.get("/api/logs", async (req, res) => {
//     logger.error("error message");
//     logger.warn("warn message");
//     logger.info("info message");
//     logger.http("http message");
//     logger.debug("debug message");

//     return res.json({
//       Moo : "YaHooooo",
//     })
//   });

// app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
// app.post("/api/logs", async (req, res) => {
//   logger.error("error message");
//   return res.json({
//     success: true,
//   });
// });

const insert = (str, index, target) => {
  const front = str.slice(0, index);
  const back = str.slice(index, str.length);
  return front + target + back;
};

let retData = {};
app.post("/api/logs", (req, res) => {
  fs.readFile("./logs/2022-09-02.log", "utf8", (err, data) => {
    retData = data;
    let idx = -1;
    while (1) {
      idx = retData.indexOf("}", idx + 1);
      if (idx === -1) {
        break;
      }
      retData = insert(retData, idx + 1, ",");
    }
    retData = "[" + retData.slice(0, retData.length - 3) + "]";
    retData = JSON.parse(retData);
    console.log(retData);
  });
  return res.json({
    test:"test"
  });
});

app.get("/api/logs", async (req, res) => {
     res.json(retData);
  });



app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
