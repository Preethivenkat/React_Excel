import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from "react-redux";
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducer';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      {/* <Provider store={store}></Provider> */}
//     <App />
//     {/* </Provider> */}
//   </React.StrictMode>
// );

const store = createStore(reducers,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
