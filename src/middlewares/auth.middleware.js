import { verifyToken } from "../utils/jwt.js";

export const authentication = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  const verificationResult = verifyToken(token);

  if (!verificationResult.valid) return res.sendStatus(403);

  req.user = verificationResult.decoded; //req.user={id:userData.id, email:userData.email}

  next();
};
