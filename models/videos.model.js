const mongoose = require("mongoose");
const { Schema } = mongoose;

const VideoSchema = new Schema({
    videoId: {
        type: String,
        unique: [true, "VideoId should be unique"]
    },
    title: String,
    uploadedBy: String,
    description: String,
    likes: Number,
    views: Number,
    subscribers: Number
})

const VideoItem = mongoose.model("VideoItem", VideoSchema);

module.exports = { VideoItem }