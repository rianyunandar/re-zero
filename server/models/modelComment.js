const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


//skema comment dalam artikel
const commentArticleSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    articleId: {
        type: ObjectId,
        ref: 'Article'
    },
    commentDetail: {
        type: String,
        required: [true, "Please input your comment!"]
    },

}, { timestamps: true });


module.exports = mongoose.model('Comment', commentArticleSchema);