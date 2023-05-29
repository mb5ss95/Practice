const URL = "https://jsonplaceholder.typicode.com/todos/";

// 비동기 시작한다 async
const getData = async () => {
  try {
    const response = await axios.get(URL);
    console.dir(response);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

getData();