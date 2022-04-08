const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema({
        username: req.body.username, 
        pw: req.body.pw, 
        name: req.body.name, 
        telephone: req.body.telephone
    }).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}
exports.userlist = (req, res) => {
    console.log(`### userController access `)
    UserSchema.find()
    .exec((err, users) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, users })
    })
 
    
}