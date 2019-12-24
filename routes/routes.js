import UserController from '../src/controllers/UserController';

module.exports = (app) => {
    app.post('/user', UserController.user);
}