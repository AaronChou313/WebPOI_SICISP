const express = require('express');
const router = express.Router();

// 引入控制器
const itemController = require('../controllers/itemController');

// 定义路由
router.get('/items', itemController.getItems);
router.post('/items', itemController.createItem);
router.get('/items/:id', itemController.getItemById);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;