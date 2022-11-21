import React, {useState, useEffect} from 'react';
import User from "./components/User";
import './assets/stylesheets/main.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState();
  const URL = 'https://jsonplaceholder.typicode.com/users';

  // FETCH DATA
  const getData=()=>{
    axios.get(`${URL}`).then(response => {
      setData(response.data.map((user) => ({...user, isFavorite: false})))  
    })
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="App">
      <User userData={data}/>
    </div>
  );
}

export default App;
