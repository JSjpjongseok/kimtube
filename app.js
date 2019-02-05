import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";


const app = express();

app.set("view engine", "pug");
// 유저로부터 받은 cookie를 이해하는 방법
app.use(cookieParser());
// 서버가 유저로부터 받은 데이터를 이해하는 방법
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));
//누군가 내 파일을 불러올때 app object를 준다.
//이게 제일 큰 덩어리
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;