const { Router } = require('express');
const NewsController = require('./controllers/NewsController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

// Session
routes.post('/SignUp', SessionController.SignUp);
routes.post('/Login', SessionController.Login);
routes.post('/Logout', SessionController.Logout);

// News
routes.post('/CreateNews', NewsController.CreateNews);
routes.get('/ListNews', NewsController.ListNews);
routes.delete('/DeleteNews/:id', NewsController.DeleteNews);




module.exports = routes;