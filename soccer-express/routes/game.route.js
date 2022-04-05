const express = require('express')
const gameRouter = express.Router()


gameRouter.use((req, res, next) => {
    console.log('###  ###')
    next();
})
module.exports = gameRouter;