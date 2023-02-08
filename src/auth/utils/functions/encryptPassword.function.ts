import { enviroment } from '@config/index';
import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(enviroment.salt_password);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};
