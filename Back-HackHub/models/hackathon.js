const mongoose = require("mongoose");
const config = require("../config/database");

const hackathonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    closeDate: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },

    numbOfMems: {
        type: String,
        required: true
    },
    specialNotes: {
        type: String
    }

});
const Hackathon = module.exports = mongoose.model('Hackathon', hackathonSchema);

module.exports.createHackathon = function(newHackathon, callback) {
    if (Hackathon.findOne({name: newHackathon.name}, (err, hackObj) => {
            if (err) {
                console.log("Error occurred")
            } else {
                if (!hackObj) {
                    newHackathon.save(callback)
                } else {
                    console.log("Hackathon name is already in use")
                }
            }
        })
    );
};

module.exports.deleteHackathon = function(name, callback) {
    if( Hackathon.findOne({name : name})) {
        Hackathon.deleteOne({name: name}, callback);
    }else{
        console.log("No Hackathon in that name");
    }
};
