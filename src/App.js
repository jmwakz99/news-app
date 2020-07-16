import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    fetch(
      `http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-16&sortBy=publishedAt&apiKey=962af81ab53546d9b8137ee43ffad214`
    )
      .then((response) => response.json())
      .then((news) => console.log(news));
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
