import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'your-secret-key';
const EXPIRE = process.env.JWT_EXPIRE || '7d';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, SECRET, { expiresIn: EXPIRE });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};