import express from "express";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
// import {db}from './config/db.js'
import { envs } from "./config/envs.js";
import { authentication } from "./middlewares/auth.middleware.js";
//settings
const app = express();
app.set("PORT", envs.port);
console.log(process.env.PORT);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// app.use(authentication)
//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/auth", authRoutes);
// app.use("/api/products",authentication, productRoutes);
app.use("/api/products", productRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
