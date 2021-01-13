const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

//skema artikel dalam topik
const articleSchema = new mongoose.Schema({
    topicId: {
        type: String,
        required: [true, "Please input ID Topic!"]
    },
   articleName: {
        type: String,
        required: [true, "Please input article name!"]
    },
    articleDetail1: {
        type: String,
        default: "null"
    },
    articleDetail2: {
        type: String,
        default: "null"
    },   
    articleDetail3: {
        type: String,
        default: "null"
    },
    articleDetail4: {
        type: String,
        default: "null"
    },
    articleDetail5: {
        type: Number,
        default: 0
    },
    articleDetail6: {
        type: Date,
    },
    articleDetail7: {
        type: Date,
    },
    articleStatus: {
        type: Boolean,
        default: true  
    },   
    categoryId: {
        type: ObjectId,
        ref: 'Category',
      },
      imageId: [{
        type: ObjectId,
        ref: 'Image'
      }],

}, { timestamps: true });


module.exports  = mongoose.model('Article', articleSchema);