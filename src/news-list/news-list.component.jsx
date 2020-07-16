import React from "react";
import News from "../news/news.component";
import "./news-list.styles.css";

const NewsList = (props) => {
  return (
    <div className="">
      {props.news.map((habari, index) => {
        return <News key={index} habari={habari} />;
      })}
    </div>
  );
};

export default NewsList;
