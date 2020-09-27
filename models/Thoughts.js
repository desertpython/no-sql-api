
const {Schema, model} = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction');

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
    reactions: [Reaction],
});

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema)
module.exports = Thoughts;


// Schema Settings

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
