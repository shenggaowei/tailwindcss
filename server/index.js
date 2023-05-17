/*
 * @Description:
 * @Author: hui
 * @Date: 2022-04-01 15:04:30
 * @LastEditTime: 2022-04-01 16:13:37
 */
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const { port, proxy } = require("./config");

const app = express();

app.use("/", express.static(path.join(__dirname, "../dist")));

Object.keys(proxy).map((key) => {
  app.use(key, createProxyMiddleware(proxy[key]));
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
