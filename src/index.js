import express from "express";
import cors from 'cors'
import { join, __dirname } from "./utils/index.js";
import productRouter from "./routes/product.route.js";
import authRouter from "./routes/auth.route.js";
import { authentication } from "./middlewares/auth.middleware.js";
import { envs } from "./config/envs.js";

//settings
const app = express();
app.set("PORT", envs.port);

// seteo cors
app.use(cors());

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
//app.use(authentication)

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page del Repositorio Para TP Final Martín Federico Fernandez Gamen - Talento Tech - NodeJS - Com 25024" });
});
app.use("/auth", authRouter);
app.use("/api/products",authentication, productRouter);

app.use((req,res,next) =>{
    res.status(404).send('Resource not available.');
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
