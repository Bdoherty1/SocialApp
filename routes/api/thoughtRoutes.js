const router = require('express').Router();
const { body } = require('express-validator');
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controlers/thoughtsControler');
const validateRequest = require('../../middleware/validation')

router
  .route('/')
  .get(getAllThoughts)
  .post(
    body('thoughtText').trim().isLength({ min: 1, max: 280 }).withMessage('Thought must be between 1 and 280 characters'),
    body('username').trim().isLength({ min: 1 }).withMessage('Username cannot be empty'),
    body('userId').isMongoId().withMessage('Invalid user ID format'),
    validateRequest,
    createThought
  );

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(
    body('thoughtText').trim().isLength({ min: 1, max: 280 }).withMessage('Thought must be between 1 and 280 characters'),
    validateRequest,
    updateThought
  )
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(
    body('reactionBody').trim().isLength({ min: 1, max: 280 }).withMessage('Reaction must be between 1 and 280 characters'),
    body('username').trim().isLength({ min: 1 }).withMessage('Username cannot be empty'),
    validateRequest,
    addReaction
  )
  .delete(removeReaction);

module.exports = router;