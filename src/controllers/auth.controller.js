import { generateToken } from "../utils/jwt.js";
import 'dotenv/config';

const default_user = {
  id: 1,
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (email === default_user.email && password === default_user.password) {
    const token = generateToken(default_user);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};

export default { login }; 