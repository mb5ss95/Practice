import axios from "axios";

// request는 요청을 보낼때마다 기본 url로 baseURL로 들어간다.

const request = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

export const api = {
    jsonplaceholder:{
        findAll: () => request.get("/todos"),
        findOne: (id) => request.get(`/todos/${id}`)
    }
}