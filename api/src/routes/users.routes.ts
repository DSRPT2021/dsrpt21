import { Router } from 'express';

import UserModel from '../modules/user/UserModel';
import CreateUserService from '../modules/user/UserService';

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();

    return res.send(users);
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
});

usersRouter.post('/', async (req, res) => {
  try {
    const userService = new CreateUserService();

    const user = await userService.execute(req.body);

    return res.send(user);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

export default usersRouter;
