const express = require('express');
const adminRouter = express.Router();

adminRouter.use((req, res, next) => { 
    console.log('###  ###')
    next();
})
module.exports = adminRouter;