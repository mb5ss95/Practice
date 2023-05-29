import axios from "axios"

const DOMAIN = "http://3.36.112.248:8080";
const request = axios.create({
    baseURL:`${DOMAIN}/api`
});

export const api = {
    menus:{
        findAll: () => {
            request.get("/menus")
        },
        findOne: (id) => {
            request.get(`/menus/${id}`)
        },
        create: (name, description, file) => {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("file", file);
            return request.post("/menus", formData, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            })
        },
        update: (id, name, description) => request.patch(`/menus/${id}`, {
            name : name,
            // key와 value의 형태가 같으면 생략
            description : description
        }),
        updateImage: (id, file) => {
            const formData = new FormData();
            formData.append("file", file);
            return request.post(`/menus/${id}/image`, formData, {
                header: {
                    "Content-Type":"multipart/form-data"
                }
            });
        },
        delete: (id) => {
            request.delete(`/menus/${id}`);
        }
    },
    order:{
        findAll: () => {
            request.get("/order");
        },
        create: (menus_id, quantity, request_detail) => {
            request.post("/order", {
                menus_id: menus_id,
                quantity: quantity,
                request_detail: request_detail
            })
        },
        findOne: (id) => {

        },
        update: (id) => {

        },
        delete: (id) => {
            
        }
    }
}