import express from 'express';
import userRouter from './routes/userRouter';
import bidRouter from './routes/bidRouter';

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
        this.app.use(express.json());
    }

    /**
     * Configura as rotas da aplicação
     */
    routes() {
        this.app.use("/user/", userRouter);
        this.app.use("/bid/", bidRouter); 
    }
}

export default new App().app;