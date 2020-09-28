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
    getThoughtsById(
        params
    , res) {
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
    createThought(
        body
    , res) {
        Thoughts.create(body)
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.status(400).json(err));
            
    },
    updateThought(
        params,
        body
    , res) {
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
    deleteThought(
        params,
     res) {
        Thoughts.findOneAndDelete({
                _id: params.id
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
    createReaction(req, res){
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
          )
            .then((dbThoughtData) => {
              if (!dbThoughtData) {
                return res.status(404).json({ message: 'No reaction with this id!' });
              }
              res.json(dbThoughtData);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
    },
      
    
    deleteReaction(req,res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((dbThoughtData) => {
              if (!dbThoughtData) {
                return res.status(404).json({ message: 'No reaction with this id!' });
              }
              res.json(dbThoughtData);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
    }
    
      


}
module.exports = thoughtController;