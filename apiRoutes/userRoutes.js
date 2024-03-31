const router = require('express').Router();
const {
    users,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../controllers/user');

router.route('/').get(users).post(createUser);

router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends/:friendId').delete(deleteFriend).post(addFriend);

module.exports = router;