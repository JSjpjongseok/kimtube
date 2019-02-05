import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => res.send("Hello from sex!")

const handleProfile = (req, res) =>  res.send("You are on my profile");

// 유저로부터 받은 cookie를 이해하는 방법
app.use(cookieParser());
// 서버가 유저로부터 받은 데이터를 이해하는 방법
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/",handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

//누군가 내 파일을 불러올때 app object를 준다.
//이게 제일 큰 덩어리
export default app;