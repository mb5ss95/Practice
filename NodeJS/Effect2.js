import {useState, useEffect} from "react"

function Hello(){
  // 1번 생성자, 소멸자
  function byFn(){
    console.log("Destroyed :(")
  }
  function hiFn(){
    console.log("Created :)")
    return byFn
  }
  useEffect(hiFn, []);

  // 2번 생성자, 소멸자
  /*   
  useEffect(() => {
    console.log("Created :)")
    return () => console.log("Destroyed :(")
  }, []); 
  */

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
