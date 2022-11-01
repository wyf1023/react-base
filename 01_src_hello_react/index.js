/*
 * 入口文件
 * @Author: wuyefan
 * @Date: 2022-11-01 20:59:50
 * @Last Modified by: wuyefan
 * @Last Modified time: 2022-11-01 21:13:17
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 检查APP和APP子组件是否合理
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
