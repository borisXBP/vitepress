// 使用 express 启动一个静态资源服务区用于访问 ./docs/.vitepress/dist 目录下的静态文件

const path = require("path");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "docs/.vitepress/dist")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
