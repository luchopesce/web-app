  import jwt from 'jsonwebtoken';
  import { options } from '../config/options.js';

  const authMiddleware = (req, res, next) => {
    const cookieToken = req.cookies['user-session'];
    const headerToken = req.headers['authorization']?.split(' ')[1];
/*
    if (!cookieToken || !headerToken) {
      return res.status(401).json({ message: 'Both tokens are required' });
    }

    if (cookieToken !== headerToken) {
      return res.status(401).json({ message: 'Tokens do not match' });
    }
      */

    try {
      const decoded = jwt.verify(headerToken, options.jwt.secret);
      req.user = decoded.user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };

  export default authMiddleware;
