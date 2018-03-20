const mongoose = require("mongoose");
const config = require("../config/database");

const eventSchema = mongoose.Schema({
    name: {
        type: String
    },
    host: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    place: {
        type: String
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

