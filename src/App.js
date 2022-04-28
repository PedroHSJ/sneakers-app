import { useEffect, useState } from "react";
import api from "./api/api";
function App() {
  const [info, setInfo] = useState([])

    useEffect(() => {
      loadSneakers()
    }, []);

    const loadSneakers = async () => {
      let data = await api.getSneakers();
      setInfo(data)
    };

    return (
        <div className="App">
            {info && info.map(sneakers => {
              return(
                <div>
                  <h1>{sneakers.name}</h1>
                  <img src={sneakers.image.thumbnail} style={{width: 300}}/>
                  </div>
              )
            })}
        </div>
    );
}

export default App;
