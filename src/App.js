import React, {useState, useEffect} from 'react';
import User from "./components/User";
import './assets/stylesheets/main.css';
import axios from 'axios';
import { notification  } from "antd";
function App() {
  const [data, setData] = useState();
  const URL = 'https://jsonplaceholder.typicode.com/users';
  // FAVORITE NOTIFICATION
  const openNotification = (description) => {
    notification["success"]({
      message: 'Success',
      description
    });
  };
  // FETCH DATA
  const getData=()=>{
    axios.get(`${URL}`).then(response => {
      setData(response.data.map((user) => ({...user, isFavorite: false})))  
    })
  }
  // HANDLE FAVORITE
  const handleFavorite = (id) => {
    setData((users) =>
      users.map((user) => (user.id === id ? { ...user, isFavorite: !user.isFavorite } : user))
    );
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="App">
      <User userData={data} handleFavorite={handleFavorite} openNotification={openNotification}/>
    </div>
  );
}

export default App;
