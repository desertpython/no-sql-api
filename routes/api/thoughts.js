const router = require('express').Router();

const {
    getAllThoughts, getThoughtsById, createThought, updateThought, deleteThought
    
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


module.exports = router;