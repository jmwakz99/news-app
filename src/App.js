import React from "react";
import NewsList from "./news-list/news-list.component";
import SearchBox from "./search-box/search-box.component";
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
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=f1d8d6b770cf4c828522e97c7db914f5 `
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
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { news, searchField } = this.state;
    let searchedNews = [];
    if (news.length > 0) {
      searchedNews = news.filter((habari) =>
        habari.source.name.toLowerCase().includes(searchField.toLowerCase())
      );
    }

    return (
      <div className="App">
        <SearchBox
          type="search"
          placeholder="search news from different sources e.g fox news, bbc news..."
          handleChange={this.handleChange}
        />
        <NewsList news={searchedNews} />
      </div>
    );
  }
}

export default App;
