const router = require('express').Router();

const {
    addThought,
    createReaction,
    removeThought,
    removeReaction,
    getAllThought,
    getOneThought,
    updateThought



} = require('../../controllers/thought-controller')

// /api/thoughts
router
    .route('/')
    .get(getAllThought)

// /api/thoughts/:id
router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(removeThought)

// find a thought
router
    .route('/:userId')
    .post(addThought)

// creates a reaction
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

// removes a reaction by id
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;