const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const { json } = require("body-parser");
const { pool } = require("./db/index")

const upload = multer({
    storage: multer.diskStorage({
        // 업로드 되는 파일 저장
        destination: (req, file, done) => {
            done(null, "public/");
        },
        // 업로드 되는 파일의 이름 지정
        filename: (req, file, done) => {
            console.log(file);

            const ext = path.extname(file.originalname);
            console.log(ext);

            const fileNameExeptExt = path.basename(file.originalname, ext);
            console.log(fileNameExeptExt);

            const saveFileName = fileNameExeptExt + Date.now() + ext;
            done(null, saveFileName);
        },
    }),
    // 업로드 되는 파일의 사이즈 limit
    limits: { fileSize: 5 * 1024 * 1024 },
});


app.get("/api/menu", async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM menus");

        if (data[0]) {
            return res.json(data[0]);
        }

    } catch (error) {
        return res.json(error);
    }
});

app.get("/api/menu/:id", async (req, res) => {
    try {
        const data = await pool.query(`SELECT * FROM menus WHERE id = ${req.params.id}`);
        console.log(data[0]);

        return res.json(data[0][0]);
    } catch (error) {
        return res.json({
            success: false,
            message: "메뉴 조회에 실패하였습니다.",
        });
    }
});

app.post("/api/menu", upload.single("file"), async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.file.path);
        console.log(req.body);
        const data = await pool.query(`INSERT INTO menus (name, description, image_src) VALUES (?, ?, ?)`,
            [req.body.name, req.body.description, req.file.path]);

        return res.json({
            success: true,
            message: "메뉴 등록에 성공하였습니다.",
        });
    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "메뉴 등록에 실패하였습니다.",
        });
    }
});

app.post("/api/menu/:id/image", upload.single("file"), async (req, res) => {
    try {
        const data = await pool.query(`UPDATE menus SET image_src= ? where id= ?`, [
            req.file.path,
            req.params.id,
        ]);

        return res.json({
            success: true,
            message: "메뉴 이미지 수정에 성공하였습니다.",
        });
    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "메뉴 이미지 수정에 실패하였습니다.",
        });
    }
});

app.patch("/api/menu/:id", async (req, res) => {
    try {
        console.log(req.params);

        const data = await pool.query(`UPDATE menus SET name = ?, description = ? where id = ?`,
            [req.body.name, req.body.description, req.params.id]);

        return res.json({
            success: true,
            message: "메뉴 정보 수정에 성공하였습니다.",
        });
    } catch (error) {
        return res.json({
            success: false,
            message: "메뉴 정보 수정에 실패하였습니다.",
        });
    }
});

app.delete("/api/menu/:id", async (req, res) => {
    try {
        const data = await pool.query("DELETE FROM menus WHERE id =?",
            [req.params.id,]);

        return res.json({
            success: true,
            message: "메뉴 삭제에 성공하였습니다.",
        });
    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "메뉴 삭제에 실패하였습니다.",
        });
    }
});

app.get("/api/order", async (req, res) => {
    try {
        const data = await pool.query(`SELECT a.id, quantity, request_detail, name, description
      FROM orders as a INNER JOIN menus as b ON a.menus_id = b.id ORDER BY a.id DESC`);
        return res.json(data[0]);
    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "전체 주문 목록 조회에 실패하였습니다.",
        });
    }
});

app.get("/api/order/:id", async (req, res) => {
    try {
        const data = await pool.query(
            `SELECT a.id, quantity, request_detail, name, description FROM orders as a
      INNER JOIN menus as b ON a.menus_id = b.id AND a.id = ? ORDER BY a.id DESC`,
            [req.params.id]);
        return res.json(data[0]);
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "주문 목록 조회에 실패하였습니다.",
        });
    }
});

app.post("/api/order", async (req, res) => {
    try {
        const data = await pool.query(
            `INSERT INTO orders (quantity, request_detail, menus_id)
      VALUES (?,?,?)`,
            [req.body.quantity, req.body.request_detail, req.body.menus_id]);

        return res.json({
            success: true,
            message: "주문에 성공하였습니다.",
        });
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "주문에 실패하였습니다.",
        });
    }
});

app.patch("/api/order/:id", async (req, res) => {
    try {
        const data = await pool.query(
            `UPDATE orders SET quantity = ?, request_detail = ?, menus_id = ? where id = ?`,
            [
                req.body.quantity,
                req.body.request_detail,
                req.body.menus_id,
                req.params.id,
            ]);

        return res.json({
            success: true,
            message: "메뉴 정보 수정에 성공하였습니다.",
        });
    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: "메뉴 정보 수정에 실패하였습니다.",
        });
    }
});

app.delete("/api/order/:id", async (req, res) => {
    try {
        const data = await pool.query(`DELETE FROM orders where id=?`, 
        [req.params.id,]);
        return res.json({
            success: true,
            message: "주문 내역 삭제에 성공하였습니다.",
        });
    } catch (error) {
        console.log(error);
        
        return res.json({
            success: false,
            message: "주문 내역 삭제에 실패하였습니다.",
        });
    }
});


app.listen(PORT, () => console.log(`listening...${IP} ${PORT} `));