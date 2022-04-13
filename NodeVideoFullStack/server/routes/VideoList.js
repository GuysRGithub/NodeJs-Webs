const express = require("express")
const router = express.Router()

const VideoDetails = require("../models/videoDetails")

router.get("/", async (req, res, next) => {
    
    try {
        let videos = await VideoDetails
        .find()
        .exec()    
        res.status(200).json(videos)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
    
})