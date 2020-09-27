const router = require('express').Router();

const {
    getAllUsers
    
  } = require('../../controllers/controlUser.js');

  router
  .route('/')
  .get(getAllUsers);
//   .post(createUser);


module.exports = router;