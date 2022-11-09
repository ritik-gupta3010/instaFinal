import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { Route } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import reducer from "./redux/reducers/postReducer";
// import { BrowserRouter } from "react-router-dom";


const middleware = [thunk];
//store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const Root = () => {
  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
        {/* <Route path={"/"} component={App}></Route> */}
        <App />
      {/* </BrowserRouter> */}
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
