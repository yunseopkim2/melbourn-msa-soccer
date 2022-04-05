const express = require('express');
const todoRouter = express.Router();


todoRouter.use((req, res, next) => { 
  console.log('###  ###')
  next();
})
module.exports = todoRouter;