const {
    User
} = require('../models');

const UserController = {
    // get all pizzas
    getAllUsers(req, res) {
        // res.send('user controller works!')
        User.find({})
            // .populate({
            //     path: 'user',
            //     select: '-__v'
            // })
            // .select('-__v')
            // .sort({
            //     _id: -1
            // })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
}
module.exports = UserController;