import { compare } from 'bcrypt';

import { InvalidPasswordException } from '../../exceptions/invalidPassword.exception';
import { INVALID_PASSWORD_MESSAGE } from '../constants/error.message';

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<void> => {
  const passwordMath = await compare(password, hashedPassword);
  if (!passwordMath)
    throw new InvalidPasswordException(INVALID_PASSWORD_MESSAGE);
};
