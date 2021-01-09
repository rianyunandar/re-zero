const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


//skema comment dalam artikel
const likeArticleSchema= new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    articleId: {
        type: ObjectId,
        ref: 'Article'
    },
    LikeStatus: {
        type: Boolean,
        default:false
    },

}, { timestamps: true });


module.exports = mongoose.model('Like', likeArticleSchema);