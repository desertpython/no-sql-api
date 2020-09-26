
const {Schema, model} = require('mongoose');
const moment = require('moment');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        validate: function (thoughts) {
            if(thoughts.length > 1 && thoughts.length < 280 ) {
               return true;
            } else {
                return false;
            }
    
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        // Array of nested documents created with the reactionSchema
    }
});

// Schema Settings

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
