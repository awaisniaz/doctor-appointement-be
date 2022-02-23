import express from "express";
import router from "./router/user";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json())
app.use('/user',router)

app.listen(PORT, () => {
  console.log("😍 i am running");
});
