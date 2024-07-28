import { PrismaClient } from '@prisma/client';
import express,{Request,Response} from 'express';
import cors from "cors";
import router from "./routes/tokenRoutes";
import { startBinanceWebsocket } from './websockets/binancewebsocket';
import {startWebSocketServer} from './websockets/serverWebsocket';



const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;


//middlewares
app.use(cors());
app.use(express.json());
app.use("/token",router)

const server = app.listen(3000,()=>{
    console.log(`listening on port ${port}`);
})



startBinanceWebsocket();
startWebSocketServer(server);



module.exports = server;

  