const router = require('express').Router();

const {
    getAllThoughts, getThoughtsById, createThought, updateThought, deleteThought, addReaction, deleteReaction
    
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
.post(addReaction)
.delete(deleteReaction)


module.exports = router;