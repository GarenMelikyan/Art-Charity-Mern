import React, { Component } from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
