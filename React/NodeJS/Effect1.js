import {useState, useEffect} from "react"
// useEffect 1번만 실행

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };


  useEffect(() => {
    console.log("i run only once")
  }, []);
  useEffect(() => {
      console.log("SEARCH FOR", keyword)
  }, [keyword]);
  useEffect(() => {
      console.log("SEARCH FOR", counter)
  }, [counter]);
  useEffect(() => {
    console.log("both change")
}, [keyword, counter]);
  return (
    <div>
      <input type="text" placeholder="Search here" onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
