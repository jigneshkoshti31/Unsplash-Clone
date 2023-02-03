import React, { useState } from "react";
import './App.css';


function App() {
  const [value,setvalue] = useState("")
  const [results,setResults] = useState([])
  // whfwppcBeuxaJSE95SLnTJJ0-u1Dzf2Yl20cwoq1ygI
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=whfwppcBeuxaJSE95SLnTJJ0-u1Dzf2Yl20cwoq1ygI&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search:</span>
        <input style={{width: "60%"}} type="text" value={value} onChange= {(e) =>setvalue(e.target.value)} />
        <button onClick={()=>fetchImages()}>Send</button>
      </div>
      
      <div className="gallery">
        {
          results.map((item) => {
            return<img className="item" key={item.id} src= {item.urls.regular} alt="images"/>
              
          })
        }
      </div>
    </div>
  );
}

export default App;
