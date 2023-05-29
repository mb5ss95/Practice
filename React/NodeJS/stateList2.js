import {useEffect, useState} from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json)
      setLoading(false)
      console.log(coins)
    })
  }, []) // 아무것도 주시하지 않으면 한번만 실행됨
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : 
      <select>
        {coins.map(coin => (
          <option>
            {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
          </option>
        ))}
      </select>
    }
    </div>
  )
  /*
        <ul>
        {coins.map(coin => (
          <li>
            {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
  */
}

export default App
