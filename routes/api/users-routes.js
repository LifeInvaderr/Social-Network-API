const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller')

// /api/users
router
    .route('/')
    .get(getAllUser)
    .post(addUser)

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser)

router
    .route('/:friendId/friends')
    .post(addFriend)
// /api/users/:userId/friends/:friendId
router
    .route('/:friendId/friends/:friendId')
    .post()
module.exports = router;