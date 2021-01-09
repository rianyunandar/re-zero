const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, "Please input category name!"]
    },
    categoryDetail: {
        type: String,
        required: [true, "Please input category detail!"]
    },
  
}, { timestamps: true });


module.exports =  mongoose.model('Category', categorySchema);