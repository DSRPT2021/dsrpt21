import AppError from '../../errors/AppError';
import UserModel, { IUser } from './UserModel';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute(user: Request): Promise<IUser> {
    if (!user.name || !user.email || !user.password)
      throw Error('All fields are required.');

    const { name, email, password } = user;

    const userExists = await UserModel.findOne({ email });

    console.log({ userExists });

    if (userExists) throw Error('User already exists.');

    const newUser = await UserModel.create({ name, email, password });

    return newUser;
  }
}

export default CreateUserService;
