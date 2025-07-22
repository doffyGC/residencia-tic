import express from 'express';
import userRouter from './routes/userRouter';

class App {

    app: express.Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    /**
     * Configura as rotas da aplicação
     */
    routes() {
        // TODO configurar o resto das rotas
        this.app.use("/user/", userRouter);
    }
}

export default new App().app;