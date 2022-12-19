import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {debounce} from "lodash";
import { Form } from "react-bootstrap";
import NewsList from "./News/NewsList";

const AxiosWithUseEffectAndDebounce = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = debounce(onSearchText, 1000);
  }, []);

  const onSearchText = (input) => {
    setIsLoading(true);
    const url = `https://content.guardianapis.com/search?api-key=test&q=${input}&show-fields=thumbnail,headline&page=1&page-size=100`;
    axios
      .get(url)
      .then((result) => {
        setResult(result.data.response.results);
        setErrorMsg("");
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMsg("Something went wrong. Try again later.");
        setIsLoading(false);
      });
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInput(input);
    inputRef.current(input);
  };

  return (
    <div className="container">
      <div className="search-section">
        <h1>News Lister</h1>
        <Form>
          <Form.Group controlId="search">
            <Form.Control
              type="search"
              placeholder="Enter text to search"
              onChange={handleInputChange}
              value={input}
              autoComplete="off"
            />
          </Form.Group>
          {errorMsg && <p>{errorMsg}</p>}
          {isLoading && <p className="loading">Loading stories...</p>}
          {result && result.length > 0 &&  <NewsList newsData={result}/>}
        </Form>
      </div>
    </div>
  );
};

export default AxiosWithUseEffectAndDebounce;
