const router = require('express').Router();
const {
    thoughts,
    getThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
} = require('../controllers/thought');

router.route('/').get(thoughts).post(createThought);

router.route('/:Id').get(getThought).delete(deleteThought).put(updateThought);

router.route('/:Id/reactions').post(addReaction);

router.route('/:Id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;