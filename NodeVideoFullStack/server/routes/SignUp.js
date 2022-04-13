const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = require("../models/User")
const bcrypt = require("bcrypt")

router.post("/", async (req, res, next) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    let user;
    try {
        user = await User.find({email: email}).exec()
        console.log('====================================');
        console.log("User exits", user);
        console.log('====================================');
    } catch (error) {
        if (user == null) {
            bcrypt.hash(req.body.password, 10, async (err, hash) => {
                if (err) {
                    console.log('====================================');
                    console.log(err);
                    console.log('====================================');
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    user = new User({
                        _id: new mongoose.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password
                    })

                    try {
                        user = await user.save()                        
                        console.log('====================================');
                        console.log("Save User", user);
                        console.log('====================================');
                        res.status(201).json({
                            message: "User Created"
                        })
                    } catch (error) {
                        res.status(500).json({
                            error: error
                        })
                        console.log('====================================');
                        console.log(error);
                        console.log('====================================');
                    }
                }
            })
        }
    }
    res.status(200).json({
        message: "Post from /api/signup"
    })
})

module.exports = router