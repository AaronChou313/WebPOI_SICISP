/**
 * 初始配置
 */ 
// 导入依赖
const express = require('express');         // 导入Express框架
const cors = require('cors');               // 导入CORS中间件
const apiRoutes = require('./routes/api');  // 导入路由
// 创建实例
const app = express();                          // 创建Express实例
app.use(cors());                                // 使用CORS中间件
app.use(express.json());                        // 使用JSON解析中间件
app.use('/api', apiRoutes);                     // 使用路由
app.use(express.static(__dirname + '/public')); // 设置静态文件目录
app.set('view engine', 'ejs');                  // 设置模板引擎为EJS

/**
 * 启动服务器
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});