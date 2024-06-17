import jwt from 'jsonwebtoken';
import { options } from '../config/options.js';

const authMiddleware = (req, res, next) => {
  const token = req.cookies['user-session'] || req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), options.jwt.secret);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
