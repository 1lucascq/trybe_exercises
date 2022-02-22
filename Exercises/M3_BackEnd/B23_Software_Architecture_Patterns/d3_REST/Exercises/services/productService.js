const ProductModel = require('../models/productModel');

async function add(name, brand) {
  return await ProductModel.add(name, brand);
}

async function getAll() {
  return await ProductModel.getAll();
}

async function getById(id) {
  return await ProductModel.getById(id);
}

async function update(id, name, brand) {
  return await ProductModel.update(id, name, brand);
}

async function exclude(id) {
  return await ProductModel.exclude(id);
}


module.exports = { add, getAll, getById, update, exclude };