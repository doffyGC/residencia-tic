import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import bidRouter from './routes/bidRouter';
import emailRouter from "./routes/emailRouter";

class App {

    app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /**
     * Configura o middleware para interpretar JSON
     */
    config() {
        this.app.use(cors({
            origin: 'http://localhost:5173'
        }));
        this.app.use(express.json());
    }

    /**
     * Configura as rotas da aplicação
     */
    routes() {
        this.app.use("/user/", userRouter);
        this.app.use("/bid/", bidRouter); 
        this.app.use("/email/", emailRouter);
    }
}

export default new App().app;