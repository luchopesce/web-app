import { Router } from "express";
import passport from "passport";
import { options } from "../config/options.js";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth.js";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  })
);

router.get('/verify', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    res.json(decoded); // Devuelve el token decodificado
  });
});
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${options.app.clientURL}/${options.app.name}/posts`,
    session: false,
  }),
  (req, res) => {
    const payload = {
      user: req.user,
    };
    const token = jwt.sign(payload, options.jwt.secret, {
      expiresIn: options.jwt.tokenLife,
    });
    // const jwtToken = `Bearer ${token}`;
    console.log(token);
    res.redirect(`${options.app.clientURL}/${options.app.name}/auth?token=${token}`);
  }
);

// Rutas protegidas
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
