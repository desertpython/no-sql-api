const {
    Thoughts

} = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        // res.send('user controller works!')
        Thoughts.find({})
            // .populate({
            //     path: 'user',
            //     select: '-__v'
            // })
            // .select('-__v')
            // .sort({
            //     _id: -1
            // })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    getThoughtsById({
        params
    }, res) {
        Thoughts.findOne({
                _id: params.id
            })
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            // .select('-__v')
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
    createThought({
        body
    }, res) {
        Thoughts.create(body)
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.status(400).json(err));
            
    },
    updateThought({
        params,
        body
    }, res) {
        Thoughts.findOneAndUpdate({
                _id: params.id
            }, body, {
                new: true
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No thoughts found with this id!'
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteThought({
        params
    }, res) {
        Thoughts.findOneAndDelete({
                _id: params.id
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No pizza found with this id!'
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    }
}
module.exports = thoughtController;