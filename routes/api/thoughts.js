const router = require('express').Router();

const {
    getAllThoughts, getThoughtsById, createThought, updateThought, deleteThought, createReaction, deleteReaction
    
} = require('../../controllers/controlThoughts.js');

router
.route('/')
.get(getAllThoughts)
.post(createThought)
  


router
.route('/:id')
.get(getThoughtsById)
.put(updateThought)
.delete(deleteThought)
.post(createReaction)
.delete(deleteReaction)


module.exports = router;