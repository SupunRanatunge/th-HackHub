const mongoose = require("mongoose");
const config = require("../config/database");

const hackathonSchema = mongoose.Schema({
    name: {
        type: String,

    },
    host: {
        type: String,

    },
    startDate: {
        type: String,

    },
    closeDate: {
        type: String,

    },
    place: {
        type: String,

    },
    price: {
        type: String,

    },

    numbOfMems: {
        type: String,

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
