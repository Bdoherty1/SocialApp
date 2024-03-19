const router = require('express').Router();
const { body } = require('express-validator');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controlers/userControler');
const validateRequest = require('../../middleware/validation');

router.route('/')
  .get(getAllUsers)
  .post(
    body('username').trim().isLength({ min: 1 }).withMessage('Username cannot be empty'),
    body('email').isEmail().withMessage('Invalid email format'),
    validateRequest,
    createUser
  );

router.route('/:userId')
  .get(getUserById)
  .put(
    body('username').trim().isLength({ min: 1 }).withMessage('Username cannot be empty'),
    body('email').isEmail().withMessage('Invalid email format'),
    validateRequest,
    updateUser
  )
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
