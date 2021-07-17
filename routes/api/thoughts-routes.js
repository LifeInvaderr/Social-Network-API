const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    deleteThought
} = require('../../controllers/thought-controller')

// /api/thoughts
// router
//     .route('/')
//     .get(getAllThought)



// /api/thoughts/:id

// /api/thoughts/<userId>/<thoughtId>
// router
//     .route('/:userId/:thoughtId')
//     .put(create)
//     .delete(deleteThought)


module.exports = router;