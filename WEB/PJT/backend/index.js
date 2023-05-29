const express = require("express");

const app = express();
const PORT = 8081;

const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const dotenv = require("dotenv");
const fs = require("fs");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  return res.json({
    status: true,
  });
});

// app.post("/data", async (req, res) => {
//   try {
//     const request_body = {
//       startDate: "2022-06-01",
//       endDate: "2022-08-01",
//       // date, week, month 세 가지 제공
//       timeUnit: "month",
//       keywordGroups: [
//         {
//           groupName: "코로나",
//           keywords: ["코로나", "covid", "백신", "거리두기"],
//         },
//         {
//           groupName: "금리",
//           keywords: ["금리", "빅스텝", "파월"],
//         },
//         {
//           groupName: "누리호",
//           keywords: ["누리호", "항우연"],
//         },
//       ],
//     };
//     const url = "https://openapi.naver.com/v1/datalab/search";
//     const headers = {
//       "Content-Type": "application/json",
//       "X-Naver-Client-Id": process.env.CLIENT_ID,
//       "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
//     };
//     const response = await axios.post(url, request_body, {
//       headers: headers,
//     });
//     fs.writeFile(
//       `./uploads/chart.json`,
//       JSON.stringify(response.data.results),
//       (error) => {
//         if (error) {
//           throw error;
//         }
//       }
//     );
//     return res.json(response.data.results);
//   } catch (error) {
//     return res.json(error);
//   }
// });

app.get("/data", async (req, res) => {
  try {
    res.set("Content-Type", "application/json; charset=utf-8");
    const tempFile = fs.createReadStream("uploads/chart.json");
    return tempFile.pipe(res);
  } catch (error) {
    return res.json(error);
  }
});

app.post("/data", async (req, res) => {
  const { startDate, endDate, timeUnit, device, gender, keywordGroups } =
    req.body;
  try {
    const request_body = {
      startDate: startDate,
      endDate: endDate,
      timeUnit: timeUnit,
      device: device === "all" ? "" : device,
      gender: gender === "all" ? "" : gender,
      keywordGroups: keywordGroups,
    };
    const url = "https://openapi.naver.com/v1/datalab/search";
    const headers = {
      "Content-Type": "application/json",
      "X-Naver-Client-Id": process.env.CLIENT_ID,
      "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
    };
    const response = await axios.post(url, request_body, {
      headers: headers,
    });
	fs.writeFile(
		`./uploads/chart.json`,
		JSON.stringify(response.data.results),
		(error) => {
		  if (error) {
			throw error;
		  }
		}
	  );
    return res.json(response.data.results);
  } catch (error) {
    return res.json(error);
  }
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
