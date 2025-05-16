const { db, dbType } = require('../config/db');

let Item;

if (dbType === 'mysql') {
  // MySQL 模型
  const { Sequelize } = db;
  Item = db.sequelize.define('items', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.FLOAT
  });
} else if (dbType === 'mongodb') {
  // MongoDB 模型
  const { Schema } = db;
  const itemSchema = new Schema({
    name: String,
    description: String,
    price: Number
  });
  Item = db.model('Item', itemSchema);
}

module.exports = Item;