import express from 'express';
import {register,login} from '../controllers/authentication';

// export default (router: express.Router) => {
//     router.post('/auth/register',register);
// };
// const router = express.Router() ;

// router.post('/auth/register', register);
// export default router;

export default (router: express.Router): express.Router => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    return router;
};