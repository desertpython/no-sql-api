const router = require('express').Router();

const {
    getAllUsers, getUsersById, createUser, updateUser, deleteUser, createFriend, removeFriend
    
} = require('../../controllers/controlUser.js');

router
.route('/')
.get(getAllUsers)
.post(createUser)
  


router
.route('/:id')
.get(getUsersById)
.put(updateUser)
.delete(deleteUser)
.post(createFriend)
.delete(removeFriend)


module.exports = router;