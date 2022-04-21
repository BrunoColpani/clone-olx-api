const expres = require('express');
const router = expres.Router();

/* Controllers */
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const AdsControllers = require('../controllers/AdsControllers');

/* Middlewares */
const Auth = require('../middleware/Auth');
const AuthValidator = require('../validators/AuthValidator');
const UserValidator = require('../validators/UserValidator');

router.get('/ping', (req, res) => {
  console.log('funciona?');
  res.json({ pong: true })
});

router.get('/states', UserController.getStates);

router.post('/users/login', AuthValidator.sigin, AuthController.signin);
router.post('/users/signup', AuthValidator.signup, AuthController.signup);

router.get('/users/me', Auth.private, UserController.info);
router.put('/users/edit', UserValidator.editAction, Auth.private, UserController.editAction);

router.get('/categories', AdsControllers.getCategories);

router.post('/ad/add', Auth.private, AdsControllers.addAction);
router.get('/ad/list', AdsControllers.getList);
router.get('/ad/item', AdsControllers.getItem);
router.put('/ad/:id', Auth.private, AdsControllers.editAction);

module.exports = router;