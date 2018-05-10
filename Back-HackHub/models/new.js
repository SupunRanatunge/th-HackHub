const mongoose = require("mongoose");
const config = require("../config/database");


//new schema

const newSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },


});

const New = module.exports = mongoose.model('New', newSchema);

module.exports.addNews = function(newNews, callback) {
    if (New.findOne({topic: newNews.topic}, (err, newObj) => {
            if (err) {
                console.log("Error occurred")
            } else {
                if (!newObj) {
                    newNews.save(callback)
                } else {
                    console.log("Topic is already in use")
                }
            }
        })
    );
};