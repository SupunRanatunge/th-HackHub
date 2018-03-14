const mongoose = require("mongoose");
const config = require("../config/database");

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    specialNotes: {
        type: String
    }

});
const Event = module.exports = mongoose.model('Event', eventSchema);

module.exports.createEvent = function(newEvent, callback) {
    if (Event.findOne({name: newEvent.name}, (err, eventObj) => {
            if (err) {
                console.log("Error occurred")
            } else {
                if (!eventObj) {
                    newEvent.save(callback)
                } else {
                    console.log("Event name is already in use")
                }
            }
        })
    );
};

module.exports.deleteEvent = function(name, callback) {
    if( Event.findOne({name : name})) {
        Event.deleteOne({name: name}, callback);
    }else{
        console.log("No Event in that name");
    }
};