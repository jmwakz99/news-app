import React from "react";
import NewsList from "./news-list/news-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch(
      `http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-16&sortBy=publishedAt&apiKey=962af81ab53546d9b8137ee43ffad214`
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState(() => {
          return {
            news: news.articles,
          };
        });
      });
  }
  render() {
    return (
      <div className="App">
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default App;
