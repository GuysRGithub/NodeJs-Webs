const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

router.post("/", async (req, res, next) => {
    let user;
    try {
        user = await User.find({email: req.body.email}).exec()        
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                res.status(401).json({
                    message: "Authication error"
                })
            }

            if (result) {
                const token = jwt.sign({
                    userId: user[0]._id,
                    firstName: user[0].firstName,
                    lastName: user[0].lastName,
                    email: user[0].email
                }, require("../configs/default").secret_key, {
                    expiresIn: "1h"
                })
                return res.status(200).json({
                    message: "Authication successful",
                    token: token
                })
            }

            res.status(401).json({
                message: "Authitication failed"
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "Authication failed"
        })
    }

})

module.exports = router