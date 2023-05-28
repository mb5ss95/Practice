import {useState} from "react"

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => {
    setToDo(event.target.value)
    console.log(toDo)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if(toDo === ""){
      return
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("")
    // toDo는 str, toDos는 array
    // toDos에 append toDo임
  }
  console.log(toDos)
  return (
    <div>
      <h1>My to Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>
          {item}
        </li>))}
    </div>
  );
}

export default App
