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

router.get("/verify", authMiddleware, (req, res) => {
  res.json({ verified: true });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${options.app.clientURL}/posts`,
    session: false,
  }),
  (req, res) => {
    const payload = {
      user: req.user,
    };
    const token = jwt.sign(payload, options.jwt.secret, {
      expiresIn: options.jwt.tokenLife,
    });

    res.cookie("user-session", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.redirect(`${options.app.clientURL}/auth?token=${token}`);
  }
);

// Rutas protegidas
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
