const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

// 数据库配置
const sequelize = new Sequelize('mysql://user:password@host:port/database');
const mongoUri = 'mongodb://localhost:27017/mydatabase';

// 数据库类型
const dbType = process.env.DATABASE_TYPE || 'mysql';

// 初始化数据库
let db;
if (dbType === 'mysql') {
  // MySQL 配置
  db = {
    sequelize,
    Sequelize
  };
} else if (dbType === 'mongodb') {
  // MongoDB 配置
  mongoose.connect(mongoUri);
  db = mongoose;
}

module.exports = { db, dbType };