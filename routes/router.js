const Router = require('express').Router();
const {
  createItem,
  getItems,
  updateItem,
} = require('../controllers/controllers');

Router.post('/', createItem);
Router.get('/', getItems);
Router.put('/:id', updateItem);

module.exports = Router;
