
// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const {Schema, model} = require('mongoose');
// may need const Thoughts or Reaction
// const moment

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            validate: function (email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
        },
        thoughts: [Thoughts],
            // array of id values referecing Thoughts model
        friends: [User],
            // Array of _id values referencing the User model (self-reference)
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

//   Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

