import jwt from "jsonwebtoken";
import { envs } from "../config/envs.js";

const { jwt_secret } = envs.secrets;

export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const expiration = { expiresIn: "1h" };
  return jwt.sign(user, jwt_secret, expiration);
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwt_secret);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, message: error.message };
  }
};
