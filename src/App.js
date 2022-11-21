import React, { useState, useEffect } from "react";
import User from "./components/User";
import "./assets/stylesheets/main.css";
import axios from "axios";
import { notification } from "antd";
function App() {
  const [data, setData] = useState();
  const URL = "https://jsonplaceholder.typicode.com/users";
  // FAVORITE NOTIFICATION
  const openNotification = (description) => {
    notification["success"]({
      description,
      duration: 1.5,
    });
  };
  // FETCH DATA
  const getData = () => {
    axios.get(`${URL}`).then((response) => {
      setData(response.data.map((user) => ({ ...user, isFavorite: false })));
    });
  };
  // HANDLE FAVORITE
  const handleFavorite = (id) => {
    setData((users) =>
      users.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
      )
    );
  };

  // HANDLE DELETE
  const handleDelete = (name, id) => {
    setData((users) => users.filter((user) => user.id !== id));
    openNotification(`${name}'s data deleted`);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="appTitle">React Assignment - Anisha Karmacharya</div>
      <User
        url={URL}
        userData={data}
        handleFavorite={handleFavorite}
        openNotification={openNotification}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
