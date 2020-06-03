import React from "react";
import "./App.css";

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // params: { api_key: "10923b261ba94d897ac6b81148314a3f", language: "en-US" },
});

const keyQuery = "api_key=10923b261ba94d897ac6b81148314a3f";

const movies = {
  getMovie: (id) =>
    api.get(`movie/${id}?${keyQuery}`, {
      params: { append_to_response: "videos" },
    }),
  getPopular: (page = 1) =>
    api.get(`movie/popular?${keyQuery}&page=${page}`).then((r) => {
      return r.data;
    }),
};

function App() {
  const getData = async () => {
    // let result = await movies.getPopular();
    console.log(await movies.getPopular());
  };

  getData();
  return <div className="App"></div>;
}

export default App;

// import React from "react";

// const App = () => {
//   return <h1>헤더 입니다.</h1>;
// };

// export default App;
