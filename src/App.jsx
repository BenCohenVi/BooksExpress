import React, { useState, useEffect } from "react";

import Loader from "react-loader-spinner";

import TopBar from "./components/TopBar";
import MainImage from "./components/MainImage";
import IntroductionCard from "./components/IntroductionCard";
import BookList from "./components/BookList";

import getBooks from "./api/get-books";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      setBooks(await getBooks());
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <MainImage />
      <IntroductionCard />
      {!isLoading ? (
        <BookList books={books} />
      ) : (
        <Loader
          type="TailSpin"
          color="#8a2b06"
          height={80}
          width={80}
          className="loader"
        />
      )}
    </div>
  );
};

export default App;
